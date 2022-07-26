var anhAr = [];
var currentIndex = 0;

function loadAnh() {
    for (var i = 0; i < 5; i++) {
        anhAr[i] = new Image();
        anhAr[i].src = "img/anh" + i + ".jpg";
    }
    autoPlay();
}

function autoPlay() {
    if (currentIndex < 4) {
        currentIndex++;
        document.getElementById("img").src = anhAr[currentIndex].src;
    } else {
        currentIndex = 0;
        document.getElementById("img").src = anhAr[currentIndex].src;
    }
    auto = setTimeout(autoPlay, 1000);
    document.getElementById("chiso").innerHTML = currentIndex + "/4";
}


function Stop() {
    clearTimeout(auto);
}

function Start() {
    autoPlay();
}