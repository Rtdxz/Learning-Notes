let sym = Symbol()
console.log(sym)

//可以传入字符串作为符号的描述,但仅用于通过这个字符串来调试代码，字符串参数与符号定义或标识完全无关
let sym1 = Symbol('foo');
let sym2 = Symbol('foo')
console.log(sym1 === sym2);//false



//全局符号注册表
//如果运行时的不同部分需要共享和重用符号实例，可以用一个字符串作为键，在全局符号注册表创建并重用

//需要用Symbol.for()方法
//Symbol.for()对每个字符串键执行幂等操作。
//第一次使用某个字符串时，会检查全局运行时注册表，不存在则生成放入注册表.存在的话就会直接放回符号实例
let fooGlobalSymbol = Symbol.for('foo');
let otherFooGlobalSymbol = Symbol.for('foo');
console.log(fooGlobalSymbol === otherFooGlobalSymbol)//true

//采用相同符号描述和全局注册定义的不等同
let localSymbol = Symbol('foo');
let globalSymbol = Symbol.for('foo');
console.log(localSymbol === globalSymbol);//false

//Symbol.keyfor()查询符号所对应的字符串键
let s = Symbol.for('foo');
console.log(Symbol.keyFor(s));//foo


//凡是可以使用字符串或数值作为属性的地方，都可以使用符号
let s1 = Symbol('foo'),
  s2 = Symbol('bar'),
  s3 = Symbol('baz'),
  s4 = Symbol('qux');
let o = {
  'a': '1'
};
console.log(o);//{ [Symbol(foo)]: 'fool val' }
Object.defineProperties(o, {
  [s3]: { value: 'baz val' },
  [s4]: { value: 'qux val' }
});
let a = 's'
Object.defineProperty(o, 'x', {
  value: '1',

  enumerable: true,

}

);
console.log(o)


//ES6中，使用instanceof操作符会用到Symbol.hasInstance函数来确定关系
function Foo() { }
let f = new Foo();
console.log(Foo[Symbol.hasInstance](f));//Symbol.hasInstance是内置符号