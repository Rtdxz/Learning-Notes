function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        console.log("addLoadEvent第一次执行！");
        window.onload = func;
    } else {
        console.log("addLoadEvent多次执行！");
        window.onload = function () {
            oldonload();
            func();
        }
    }
}