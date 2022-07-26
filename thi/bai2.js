function dangki() {
    var flag = true;

    var user = document.getElementById("user").value.trim();
    if (user == "") {
        document.getElementById("user_error").innerHTML = "User không được để trống";
        flag = false;
    } else {
        document.getElementById("user_error").innerHTML = "";
    }

    var email = document.getElementById("email").value.trim();
    var emailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email == "") {
        document.getElementById("email_error").innerHTML = "Email không được để trống";
        flag = false;
    } else if (!emailformat.test(email)) {
        document.getElementById("email_error").innerHTML = "Email không hợp lệ";
        flag = false;
    } else {
        document.getElementById("email_errorl").innerHTML = "";
    }

    var password = document.getElementById("pass").value.trim();
    var passformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    if (password == "") {
        document.getElementById("pass_error").innerHTML = "Password không được để trống";
        flag = false;
    } else if (!passformat.test(password).leng) {
        document.getElementById("pass_error").innerHTML = "Password phải có ít nhất 6 ký tự và chứa ít nhất 1 kí tự là số ";
        flag = false;
    } else {
        document.getElementById("pass_error").innerHTML = "";
    }

    var nam = document.getElementById("nam").value.trim();
    if (nam == "") {
        document.getElementById("nam_error").innerHTML = "Năm không được để trống";
        flag = false;
    } else if (nam != Number(nam)) {
        document.getElementById("nam_error").innerHTML = "Năm phải là số";
        flag = false;
    } else {
        document.getElementById("nam_error").innerHTML = "";
    }

    if (flag == true) {
        alert("Gửi thành công");
        return true;
    } else {
        return false;
    }
}