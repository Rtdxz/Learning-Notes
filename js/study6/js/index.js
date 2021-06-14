var createTable = function () {
    var data = [{
        name: '张三',
        subject: 'javascript',
        score: 90
    },
    {
        name: '李四',
        subject: 'javascript',
        score: 100
    },
    {
        name: '王五',
        subject: 'javascript',
        score: 80
    },]

    var tbody = document.querySelector("tbody");
    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement("tr");

        tbody.appendChild(tr);
        for (var k in data[i]) {
            var td = document.createElement("td");
            //td.innerHTML = data[i][k];
            var text = document.createTextNode(data[i][k]);
            td.appendChild(text);
            tr.appendChild(td);
        }
        var deleteOper = document.createElement("td");
        var a = document.createElement("a");
        var a_text = document.createTextNode("删除");
        a.appendChild(a_text);
        a.setAttribute("href", 'javascript:;');
        deleteOper.appendChild(a);
        // deleteOper.innerHTML = "<a href='javascript:;'>删除</a>";
        // var a = deleteOper.children[0];
        a.onclick = function () {
            tbody.removeChild(this.parentNode.parentNode);
        }
        tr.appendChild(deleteOper);

    }

}
window.onload = createTable;