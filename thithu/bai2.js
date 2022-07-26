function dangki() {
    var flag = true;
    var hoten = document.getElementById("hoten").value.trim();
    if (hoten == '') {
        document.getElementById("hoten_error").innerHTML = "Vui lòng nhập họ tên";
        flag = false;
    } else {
        document.getElementById("hoten_error").innerHTML = "";
    }

    var email = document.getElementById("email").value.trim();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == '') {
        document.getElementById("email_error").innerHTML = "Vui lòng nhập email";
        flag = false;
    } else if (!email.match(mailformat)) {
        document.getElementById("email_error").innerHTML = "Email không hợp lệ";
        flag = false;
    } else {
        document.getElementById("email_error").innerHTML = "";
    }

    var sdt = document.getElementById("sdt").value.trim();
    if (sdt == '') {
        document.getElementById("sdt_error").innerHTML = "Vui lòng nhập số điện thoại";
        flag = false;
    } else if (sdt.length < 10) {
        document.getElementById("sdt_error").innerHTML = "Số điện thoại phải có ít nhất 10 ký tự";
        flag = false;
    } else {
        document.getElementById("sdt_error").innerHTML = "";
    }

    var user = document.getElementById("user").value.trim();
    if (user == '') {
        document.getElementById("user_error").innerHTML = "Vui lòng nhập tài khoản";
        flag = false;
    } else if (user.length < 8) {
        document.getElementById("user_error").innerHTML = "Tài khoản phải có ít nhất 8 ký tự";
    } else {
        document.getElementById("user_error").innerHTML = "";
    }

    var pass = document.getElementById("pass").value.trim();
    if (pass == '') {
        document.getElementById("pass_error").innerHTML = "Vui lòng nhập mật khẩu";
    } else {
        document.getElementById("pass_error").innerHTML = "";
    }

    var repass = document.getElementById("repass").value.trim();
    if (repass == '') {
        document.getElementById("repass_error").innerHTML = "Vui lòng nhập lại mật khẩu";
    } else if (repass != pass) {
        document.getElementById("repass_error").innerHTML = "Mật khẩu không khớp";
        flag = false;
    } else {
        document.getElementById("repass_error").innerHTML = "";
    }

    if (!bangt[0].checked && !bangt[1].checked) {
        document.getElementById("bangt_error").innerHTML = "Vui lòng chọn lua";
        flag = false;
    } else {
        document.getElementById("bangt_error").innerHTML = "";
    }

    if (flag == true) {
        alert("đăng kí thành công");
        return false;
    }
    return flag;
}