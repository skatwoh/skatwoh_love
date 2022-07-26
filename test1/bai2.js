var gio = document.getElementById("gio").children[1].children;

var tongtien = document.getElementById("tongtien");

function tinhtien(osoluong) {
    var soluong = osoluong.value;
    var gia = osoluong.parentElement.previousElementSibling.innerHTML;
    var thanhtien = osoluong.parentElement.nextElementSibling;
    thanhtien.innerHTML = soluong * gia;

    var tongtien = 0;
    for (var i = 0; i < gio.length; i++) {
        var thanhtien = gio[i].lastElementChild.innerHTML;
        tongtien = tongtien + Number(thanhtien);
    }
    tongtien.innerHTML = tongtien;
}

function validateForm() {
    var flag = true;

    var tenkh = document.getElementById("tenkh").value.trim();
    if (tenkh == '') {
        document.getElementById("err_tenkh").innerHTML = "Vui lòng nhập tên khách hàng";
        flag = false;
    } else if (tenkh.length < 5) {
        document.getElementById("err_tenkh").innerHTML = "Tên khách hàng phải có ít nhất 5 ký tự";
        flag = false;
    } else {
        document.getElementById("err_tenkh").innerHTML = "";
    }

    var email = document.getElementById("email").value.trim();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == '') {
        document.getElementById("err_email").innerHTML = "Vui lòng nhập email";
        flag = false;
    } else if (!email.match(mailformat)) {
        document.getElementById("err_email").innerHTML = "Email không hợp lệ";
        flag = false;
    } else {
        document.getElementById("err_email").innerHTML = "";
    }

    if (flag == true) {
        alert('Đặt hàng thành công');
        return false;
    }
    return flag;
}