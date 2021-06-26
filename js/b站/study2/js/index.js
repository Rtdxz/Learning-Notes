function createNode() {
    var para = document.createElement("p");
    var txt1 = document.createTextNode("This is ");
    var txt2 = document.createTextNode("my");
    var txt3 = document.createTextNode(" content.");

    var emphasis = document.createElement("em");
    emphasis.appendChild(txt2);
    para.appendChild(txt1);
    para.appendChild(emphasis);
    para.appendChild(txt3);

    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}
function alertStyle() {
    var para = document.getElementsByTagName("p");
    alert("The font family is" + para[1].style.fontFamily);
    console.log(para[1]);
}

addLoadEvent(createNode);
addLoadEvent(alertStyle);
