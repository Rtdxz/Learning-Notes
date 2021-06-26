var tab = function () {
    var tab_list = document.querySelector(".tab_list");
    //var tab_list = document.getElementsByClassName("tab_list")[0];
    var list = tab_list.querySelectorAll("li");
    //var list = tab_list.getElementsByTagName("li");
    var content_list = document.querySelector(".tab_con");
    var content = content_list.querySelectorAll(".item");
    for (var i = 0; i < list.length; i++) {
        list[i].setAttribute("data-index", i);
        list[i].onclick = function () {
            console.log(this);
            for (var j = 0; j < list.length; j++) {


                list[j].removeAttribute("class");
                //list[i].className = '';
            }

            for (var j = 0; j < content.length; j++) {
                if (content[j].getAttribute("class") == "item selected") {
                    content[j].className = 'item';
                }
            }
            this.setAttribute("class", "current");
            //this.className = "current";

            var index = parseInt(this.getAttribute("data-index"));

            //content[index].setAttribute("class", "selected");
            addClass(content[index], "selected");
        }
    }
}

var pull_down = function () {
    var pull_li = document.querySelector("#pull_down");
    var pull_li_ul = pull_li.getElementsByTagName("ul")[0];
    pull_li.onmouseover = function () {

        console.log(pull_li_ul);
        pull_li_ul.style.display = "block";
    }
    pull_li.onmouseout = function () {
        pull_li_ul.style.display = "none";
    }
}

var addClass = function (node, className) {
    if (node.className == '') {
        node.className = className
    }
    else {
        var newClassName = node.className + " " + className;
        node.setAttribute("class", newClassName);

    }
}

var move = function () {
    var img = document.getElementsByTagName("img")[0];
    document.addEventListener("mousemove", function (e) {
        var x = e.pageX;
        var y = e.pageY;
        img.style.left = x + 10 + "px";
        img.style.top = y + 10 + "px";
    }, false);
}

var search = function () {
    var con = document.querySelector(".content");
    var jd_input = document.querySelector(".search").querySelector("input");

    jd_input.addEventListener("keyup", function () {
        if (this.value == "") {
            con.style.display = 'none';
        }
        else {
            con.innerHTML = this.value;
            con.style.display = "block";
        }
    }, false);

    jd_input.addEventListener("blur", function () {
        con.style.display = 'none';
    }, false);

    jd_input.addEventListener("focus", function () {
        if (this.value == "") {
            con.style.display = 'none';
        }
        else {
            con.innerHTML = this.value;
            con.style.display = "block";
        }
    }, false);

}

/* var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    var record = new Array(26).fill(0);

    for (var i = 0; i < s.length; i++) {
        console.log("a" - "a");
        record[s[i] - 'a']++;

    }
    for (var j = 0; j < t.length; j++) {
        console.log(record[t[j] - 'a']);
        record[t[j] - 'a']--;

    }
    for (var x = 0; x < 26; x++) {

        if (record[x] !== 0) { return false; }
    }
    return true;
};
addLoadEvent(isAnagram("a", "b")); */

var sendMessage = function () {
    var button = document.querySelector(".send").querySelector("button");
    var time = 3;
    button.addEventListener('click', function () {
        this.disabled = true;
        this.innerHTML = "请" + time + "秒后重新发送";
        var timer = setInterval(function () {
            time--;
            if (time != 0) {
                button.innerHTML = "请" + time + "秒后重新发送";
            }
            else {
                clearInterval(timer);
                button.innerHTML = "发送";
                time = 3;
                button.disabled = false;
            }
        }, 1000)
    }, false)
}

addLoadEvent(sendMessage);
addLoadEvent(search);
addLoadEvent(tab);
addLoadEvent(pull_down);
addLoadEvent(move);