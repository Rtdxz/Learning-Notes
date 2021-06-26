var animate = function (ele, target, callback) {
    clearInterval(ele.timer);
    var step = (target - ele.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);

    ele.timer = setInterval(function () {
        ele.style.left = ele.offsetLeft + step + 'px';
        if (Math.abs(target - ele.offsetLeft) < Math.abs(step)) {
            ele.style.left = target;
            clearInterval(ele.timer);
        }

    }, 25);
}
var box = document.querySelector(".box");
animate(box, 500);

/* var canConstruct = function (ransomNote, magazine) {

    var map2 = new Map();
    var result = true;
    for (var key in magazine.split('')) {
        if (map2.has(magazine[key])) {
            map2.set(magazine[key], map2.get(magazine[key]) + 1);
        }
        else {
            map2.set(magazine[key], 1);

        }




    }
    console.log(map2);

    for (var key in ransomNote.split('')) {
        if (map2.has(ransomNote[key])) {


            map2.set(ransomNote[key], map2.get(ransomNote[key]) - 1);
            if (map2.get(ransomNote[key]) < 0) {
                result = false;
                break;
            }
        }
        else {
            result = false;
            break;
        }
    }
    console.log(map2);
    return result;
};
console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi")); */

/* function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

console.log(xiaoming.age()); // 25, 正常结果
console.log(getAge()); // NaN */

/* function string2int(s) {
    var arr = s.split("");
    var arr2 = arr.map((c) => (c * 1));
    var result = arr2.reduce(function (x, y) { return x * 10 + y; });

    return result;
}
console.log(string2int('12345'));

// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
}
else {
    console.log('测试失败!');
} */


/* function Cat(name, color) {

    this.name = name;

    this.color = color;

}
function Animal() {

    this.species = "动物";

}
Cat.prototype = new Animal();

Cat.prototype.constructor = Cat;

var cat1 = new Cat("大毛", "黄色");

alert(Cat.prototype.constructor == Animal);
var arr = [];
arr.forEach() */

/* 
var ajax = document.querySelector(".ajax");

document.getElementsByTagName("button")[0].onclick = function () {

    if (window.XMLHttpRequest) {
        var request = new XMLHttpRequest();
    } else {
        var request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                console.log("success");

                ajax.innerText = request.responseText;
            }
            else {
                console.log('Error: ' + request.readyState)
                ajax.innerText = 'Error: ' + request.status;

            }

        }

    }
    request.open('Get', 'https://www.w3school.com.cn/ajax/test1.txt', true);
    request.send();


}; */









//Promise封装 ajax写法
var ajax = document.querySelector(".ajax");
function test() {
    return new Promise(function (resolve, reject) {
        if (window.XMLHttpRequest) {
            var request = new XMLHttpRequest();
        } else {
            var request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    resolve(request.responseText);
                    //ajax.innerText = request.responseText;
                }
                else {
                    //ajax.innerText='Error: '+request.status;
                    reject(request.status);
                }
            }

        }
        request.open('Get', 'https://www.w3school.com.cn/ajax/test1.txt', true);
        request.send();
    });

};



document.getElementsByTagName("button")[0].onclick = function () {
    var ajaxRequest = test();
    ajaxRequest.then(function (text) {
        ajax.innerText = text;
        console.log(text);
    }).catch(function (status) {
        ajax.innerText = 'Error:' + status;

    });
}




/* function func(res) {
    console.log(res);
}
document.getElementsByTagName("button")[0].onclick = function () {
    var newjs = document.createElement("js");
    newjs.src = 'https://www.w3school.com.cn/ajax/test1.txt?callback=func';
    document.getElementsByTagName("head")[0].appendChild(newjs);
} */




/* function createFunctions() {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = (function (num) {
            return function () {
                return num++;
            }


                ;
        }
        )(i);
    }
    return result;
}
var newfun = createFunctions();
for (var f of newfun) {
    console.log(f());

}
console.log(newfun);
var a = function () { console.log('a'); return 1; }();
console.log(a);
 */


/* function test() {
    (function () {
        for (var i = 1; i <= 5; i++) {  //i
            alert(i);
        }
    })();
    alert(i);
}
test();
 */

/* 
let promise = new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function () {
    console.log('resolved.');
});

console.log('Hi!'); */

const promise = new Promise(function (resolve, reject) {
    resolve('ok');
    setTimeout(function () { throw new Error('test') }, 0)
});
promise.then(function (value) { console.log(value) });