var btn = document.getElementById('btn');
var table = document.getElementsByTagName('table')[0];
table.border = 1;
table.cellPadding = 0;
table.cellSpacing = 0;
table.style.marginTop = "10px";
var thead = document.createElement('thead');
table.appendChild(thead);
var info = ["姓名", "邮箱", "手机", "地址"];
var tr = document.createElement('tr');
thead.appendChild(tr);
for (var i = 0; i < info.length; i++) {
    var th = document.createElement('th');
    tr.appendChild(th);
    th.innerHTML = info[i];
}
var tbody = document.createElement('tbody');
table.appendChild(tbody);
var inputs = document.getElementsByTagName('input');
var inputlen = inputs.length - 1;
console.log(inputlen)
var count = 0;
var index ;
var flag = true;
var arr =[
    {"name" : "小黑", "邮箱":"xiaohei@126.com", "手机":"12312736487", "地址":"北京"},
    {"name" : "小黑", "邮箱":"xiaohei@126.com", "手机":"12312736487", "地址":"北京"},
    {"name" : "小黑", "邮箱":"xiaohei@126.com", "手机":"12312736487", "地址":"北京"},
    {"name" : "小黑", "邮箱":"xiaohei@126.com", "手机":"12312736487", "地址":"北京"}
];
btn.onclick = function () {
    for (var i = 0; i < inputs.length-1; i++) {
        console.log(inputs[i].value)
        if (inputs[i].value !== '') {
            flag = true;
        }
    }
    if (flag) {
        count++;
        var trs = document.createElement('tr');
        trs.setAttribute('index',count);
        tbody.appendChild(trs);
        for (var j = 0; j < inputs.length -1 ; j++) {
            var td = document.createElement('td');
            // console.log(inputs[j].value)
            td.innerHTML = inputs[j].value;
            inputs[j].value = '';
                        // for (var k in arr) {
                        //     td.innerHTML = arr[j][k]; 
                        // }
             trs.appendChild(td);
        }
        index = trs.getAttribute('index');
        console.log(index)
        if (index % 2 !== 0) {
            trs.style.backgroundColor = "yellow";
        } else {
            trs.style.backgroundColor = "red";
        }
    }
    
}

