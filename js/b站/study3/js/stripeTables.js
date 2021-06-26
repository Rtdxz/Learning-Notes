function stripeTables() {
    var table = document.getElementsByTagName("table");

    for (var i = 0; i < table.length; i++) {
        var odd = false;
        var trs = table[i].getElementsByTagName("tr");
        for (var j = 0; j < trs.length; j++) {
            if (odd == true) {
                var tr = trs[j];
                tr.style.backgroundColor = "#ffc";
                odd = false;
            }
            else {
                odd = true;
            }
        }
    }
}
function displayAbbreviations() {
    var body = document.getElementsByTagName("body")[0];
    var dis = new Array();
    var abbrs = document.getElementsByTagName("abbr");
    for (var i = 0; i < abbrs.length; i++) {
        var txt = abbrs[i].getAttribute("title");
        var key = abbrs[i].firstChild.nodeValue;
        dis[key] = txt;
    }

    for (key in dis) {
        var para = document.createElement("p");
        var str = key + ":" + dis[key];
        var strnode = document.createTextNode(str);
        para.appendChild(strnode);
        body.appendChild(para);
    }
}
addLoadEvent(stripeTables);
addLoadEvent(displayAbbreviations);