var anhAr = [];
var currentIndex = 0;

function loadAnh() {
    for (var i = 0; i < 5; i++) {
        anhAr[i] = new Image();
        anhAr[i].src = "img/anh" + i + ".jpg";
    }

}

function next() {
    if (currentIndex < 4) {
        currentIndex++;
        document.getElementById("img").src = anhAr[currentIndex].src;
    } else {
        currentIndex = 0;
        document.getElementById("img").src = anhAr[currentIndex].src;
    }
}

function back() {
    if (currentIndex > 0) {
        currentIndex--;
        document.getElementById("img").src = anhAr[currentIndex].src;
    } else {
        currentIndex = 4;
        document.getElementById("img").src = anhAr[currentIndex].src;
    }
}

function last() {
    currentIndex = 4;
    document.getElementById("img").src = anhAr[currentIndex].src;
}

function first() {
    currentIndex = 0;
    document.getElementById("img").src = anhAr[currentIndex].src;
}