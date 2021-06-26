function positionMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var para = document.getElementById("message");
    para.style.position = "absolute";
    para.style.top = "100px";
    para.style.left = "50px";
    movement = setTimeout(moveMessage, 5000);

}

function moveMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;

    var elem = document.getElementById("message");

    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == 200 && ypos == 100) {
        return true;
    }
    if (xpos < 200) {
        xpos++;
    }
    if (xpos > 200) {
        xpos--;
    }
    if (ypos < 100) {
        ypos++;
    }
    if (ypos > 100) {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    movement = setTimeout(moveMessage, 10);
}
addLoadEvent(positionMessage);