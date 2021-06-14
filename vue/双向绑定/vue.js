class Vue {
  //在new vue()的时候就会执行constructor
  constructor(options) {
    this.$data = options.data
    //调用劫持数据封装的Obeserve方法
    Obeserve(this.$data)

    //属性代理，这里就是相当于可以直接使用this.name来替代this.data.name
    //遍历data里的所有键值
    Object.keys(this.$data).forEach((key) => {
      //通过defineProperties来为vue对象添加属性，其实defineProperties本质就是用来添加属性
      Object.defineProperties(this, key, {
        configurable: true,
        enumerable: true,
        get() {
          //这里劫持了vue对象的取值操作，当取到this.name时，实际上就是返回了this.$data[name]
          return this.$data[key];
        },
        set(newval) {
          //同理这里劫持了vue对象的赋值操作，当给this.name赋值时，实际上给this.$data[name]赋值，
          //而当调用了这个赋值，由于之前已经对data立面的数据进行劫持了，所以不需要再进行递归，而是使用了之前劫持过的方法
          this.$data[key] = newval
        }

      })
    })
  }
}

function Obeserve(obj) {
  //递归出口，如果观察的不是对象，则退出递归
  if (!obj || typeof obj !== 'object') return;
  //递归观察对象，知道观察的不是对象为止
  Obeserve(obj);
  //遍历对象中的每个键值，劫持每个值的赋值和取值操作
  Object.keys(obj).forEach((key) => {
    let value = obj[key];//对象中key对应的value
    Object.defineProperty(obj, key, {
      enumerable: true,//允许遍历,一定要设置，不然默认为false
      configurable: true,//允许配置,delete
      get() {
        //劫持取值操作
        return value
      },
      set(newval) {
        //劫持赋值操作
        value = newval;
        console.log(value);
        //需要继续递归，因为倘若新的赋值为对象，就需要重新为这个对象进行观察劫持
        Obeserve(value)
      }
    })
  })
}

//传入需要替换的视图节点el以及vue对象
function Compile(el, vm) {
  //取出对应dom节点
  vm.$el = document.querySelector(el)
  //文档碎片化，通过统一dom操作，最后一起把dom的操作的结果添加到dom里面
  const fragment = document.createDocumentFragment();
  //这里的while是逐步取出el里的第一个子元素(包括文本节点和元素节点)
  //node = vm.$el.firstchild返回值是赋值号后面的值，只要不为空就会继续下去
  while (node = vm.$el.firstchild) {
    //appendChild会导致原先的dom节点不再显示，被添加移位到这个文档碎片中
    fragment.appendChild(node)

  }
  //对节点进行模板编译
  replace(fragment)
  //最后再把所有取出合并到文档碎片中的节点添加回原来的节点
  vm.$el.appendChild(fragment)


  function replace(node) {
    //定义一个正则表达式，匹配Mustache语法的文本
    //先匹配两个左括号，接着匹配0个至多个空格\s*,即把数据左空格去掉,再匹配里面的文本内容
    const resestMustache = /\{\{\s*(.S+)\s*\}\}/;

    //nodeType为3是文本节点
    if (node.nodeType == '3') {
      //取出当前节点的文本
      const text = node.textContent
      //当处于文本节点时，对文本进行正则匹配
      //exec函数时正则对象的方法，返回由正则匹配到的数组
      //该数组包含了匹配到的整个字符串，也包括了其中()中的字符串
      const execResult = regMustache.exec(text)
      //数组的第二个元素才是需要的字符串，因此取execResult[1]
      //这里就利用了reduce来链式获取对象
      if (execResult) {
        //这里就是通过模板编译获得该Mustache对应的vm中data的值，并取出
        let value = execResult[1].split('.').reduce((newObj, key) => {
          return newObj[key]
        }, vm)//这里初始值直接设为vue对象就行，因为之前已经进行过属性绑定了
        //把对应vm中的值替换到dom节点上
        //直接利用之前定义的正则进行替换，把Mustache替换掉
        node.textContent = text.replace(resestMustache, value);
      }

      //当递归到文本节点时退出递归
      return;
    }
    //遍历递归所有子节点
    node.childNodes.forEach((child) => replace(child))
  }
}

// 依赖收集的类/收集 watcher 订阅者的类
class Dep {
  constructor() {
    //初始化依赖数组，用于收集订阅者
    this.sub = []
  }
  //添加订阅者的方法
  addSub(watcher) {
    //在数组中进行添加
    this.sub.push(watcher);
  }
  //通知订阅者更新的方法
  notify() {
    //遍历每个订阅者并调用订阅者的更新方法
    this.sub.forEach((watcher) => watcher.update())
  }
}

class Watcher {
  // cb 回调函数中，记录着当前 Watcher 如何更新自己的文本内容
  //    但是，只知道如何更新自己还不行，还必须拿到最新的数据，
  //    因此，还需要在 new Watcher 期间，把 vm 也传递进来（因为 vm 中保存着最新的数据）
  // 除此之外，还需要知道，在 vm 身上众多的数据中，哪个数据，才是当前自己所需要的数据，
  //    因此，必须在 new Watcher 期间，指定 watcher 对应的数据的名字
  constructor(vm, key, cb) {
    //vm即vue对象,用于获取里面的数据
    this.vm = vm;
    //key是该订阅者所订阅的属性，即vue里面data的某个值
    this.key = key;
    //cb是更新时的回调函数，即更新dom的操作
    this.cb = cb


    //关键代码
    //下面三行代码，负责把创建的 Watcher 实例存到 Dep 实例的 subs 数组中

    //首先在创建一个订阅者时，就把订阅者存到全局的dep依赖中
    Dep.target = this
    //获取该订阅者所订阅的数据，这里传入了vm,并且用reduce进行遍历取值，当取到值的时候就会调用数据劫持中定义的方法
    //此时数据劫持中的方法为  Dep.target && dep.addSub(Dep.target)
    //将上一步全局的dep依赖(即当前订阅者)加入到dep里面的sub数组中，即完成了添加依赖
    key.split('.').reduce((newObj, k) => newObj[k], vm)
    //添加了当前订阅者后清空，为下一个订阅者添加让步
    Dep.target = null
  }


  //订阅者的更新操作，同样遍历该订阅者需要更新的值，再进行操作
  update() {
    const value = this.key.split('.').reduce((newObj, k) => newObj[k], this.vm)
    this.cb(value)
  }
}