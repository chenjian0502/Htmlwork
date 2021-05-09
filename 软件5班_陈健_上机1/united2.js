function add() {
    var start = document.getElementById("start").value;
    var n1 = parseInt(start);
    var end = document.getElementById("end").value;
    var n2 = parseInt(end);
    if (start == "" || end == " ") {
        alert("请输入数据");
    }
    if (start >= end) {
        alert("起始数必须小于终止数，请重输！");
        return;
    }

    var sum = 0;
    for (i = n1; i <= end; i++) {
        sum += i;
    }
    document.getElementById("sum").value = sum;
}

function clearText(){
    document.getElementById("start").value = "";
    document.getElementById("end").value = "";
    document.getElementById("sum").value = "";
}