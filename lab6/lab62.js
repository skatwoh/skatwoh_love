var flag = true;
var count = 0;



function mark(btn) {
    if (flag) {
        btn.innerText = "X";
        btn.style.backgroundColor = "red";
        flag = false;
        count++;
    } else {
        btn.innerText = "O";
        btn.style.backgroundColor = "blue";
        flag = true;
        count--;
    }

    if (count == -3) {
        alert("Player O wins!");
    } else if (count == 3) {
        alert("Player X wins!");
    }

}