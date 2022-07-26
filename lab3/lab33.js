var a = null,
    b = null,
    o = null;

function lam_lai() {
    a = null;
    b = null;
    o = null;
}

function toan_tu(x) {
    o = x;
}

function toan_hang(x) {
    if (a == null) {
        a = x;
    } else {
        b = x;
    }
}

function thuc_hien() {
    switch (o) {
        case '+':
            var c = a + b;
            alert("Tổng: " + c);
            break;
        case '-':
            var d = a - b;
            alert("Hiệu: " + d);
            break;
        case 'x':
            var e = a * b;
            alert("Tích: " + e);
            break;
        case ':':
            var f = a / b;
            alert("Thương: " + f);
            break;
        default:
            alert(o + ' không phải toán tử');
    }
    lam_lai();

}