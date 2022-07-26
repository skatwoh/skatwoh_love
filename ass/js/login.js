var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var Fullname = $("#name");
var email = $("#email");
var sdt = $("#sdt");
var hinhthuc = $$('input[name="hinhthuc"]');


form.addEventListener("submit", (e) => {

    e.preventDefault();


    validator();
});

function validator() {
    if (Fullname.value === "") {
        errorMessage(Fullname, "Không để trống họ tên ");
    } else {
        successMessage(Fullname);
    }

    if (email.value === "") {
        errorMessage(email, "Không để trống email ");
    } else {
        successMessage(email);
    }

    if (sdt.value === "") {
        errorMessage(sdt, "Không để trống số điện thoại ");
    } else if (sdt.value.length < 9 || sdt.value.length > 11) {
        errorMessage(sdt, "Số điện thoại không hợp lệ");
    } else {
        successMessage(sdt);
    }

    if (!hinhthuc[0].checked && !hinhthuc[1].checked) {
        $(".hinhthuc").innerText = "Phải chọn hình thức";
        $("#frames").style.background = "yellow";
    } else {
        $(".hinhthuc").innerText = "";
        $("#frames").style.background = "none";
        $("#frames").style.borderColor = "green";
    }
}

function fillDropdown() {
    var khoahoc = document.getElementById("khoahoc").value;
    document.getElementById("hocphi").setAttribute("value", khoahoc);
}

function errorMessage(input, message) {

    var formGroup = input.parentElement;
    var span = formGroup.querySelector("span");
    formGroup.className = "form-group error";
    span.innerText = message;
}

function successMessage(input) {
    var formGroup = input.parentElement;
    formGroup.className = "form-group success";

}