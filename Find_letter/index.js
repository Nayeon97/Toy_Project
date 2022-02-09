let btn = document.querySelectorAll(".container input"); // 글자 버튼
let startbtn = document.querySelectorAll(".startbtn");
let restart_btn = document.getElementById("restart");

let sucess = document.getElementsByClassName("sucess")[0]; // 게임성공화면
let end = document.getElementsByClassName("push")[0]; // 끝
let user_count = document.getElementById("user_count");
let inputname = document.getElementById("name");
let username;
/*time*/
let inputsec = document.getElementById("sec");
let inputmsec = document.getElementById("msec");
// let sec = 6;
// let msec = 00;
let Interval;

let result = 0;

let array = [];
let text = [];
let count = 0;
let time = 700;

function startTimer() {
    Interval = setInterval(function () {
        let sec = parseInt(time / 100);
        let msec = (time % 100);
        inputsec.innerText = sec;
        inputmsec.innerText = msec;
        time--;
        if (time == 0) {
            inputmsec.innerText = "00";
            clearInterval(Interval);
            timerset(2);
        }
        if (time != 0 && msec <= 9) {
            inputmsec.innerText = "0" + msec;
        }
    }, 10);
}

function shuffle() {
    let randomNum = Math.floor(Math.random() * 16);
    for (let i = 0; i < 16; i++) {
        if (i == randomNum) {
            array[i] = "먽";
        }
        else {
            array[i] = '멵';
        }
    }
    printArray();
}

function printArray() {
    for (let i = 0; i < array.length; i++) {
        btn[i].value = array[i];
    }
}

function btn_Click() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function (e) {
            if (e.target.value == '먽') {
                clearInterval(Interval);
                sucess.style.display = "flex";
                count++;
                timerset(1);
            }
            else {
                clearInterval(Interval);
                timerset(2);
            }
        }
    }
}

function timerset(result) {
    if (result == 1) { // 성공
        time = 700;
        nextgame();
    }
    if (result == 2) {
        clearInterval(Interval);
        end.style.display = "flex";
        if (count == 0) {
            user_count.innerText = `${username}님은 정답기록이 없습니다.😭`;
        }
        else {
            user_count.innerText = `${username}님은 총 ${count}번 성공하였습니다.👍`;
        }
    }
}

function nextgame() {  // next
    startbtn[1].onclick = function (e) {
        sucess.style.display = "none";
        time = 700;
        startTimer();
        shuffle();
    }
}

function startGame() { //start
    startbtn[0].onclick = function (e) {
        let a = document.getElementsByClassName("start")[0];
        a.style.display = "none";
        startTimer();
        username = inputname.value;
        btn_Click();
        return username;
    }
}

function restartgame() {
    restart_btn.onclick = function (e) {
        let a = document.getElementsByClassName("start")[0];
        a.style.display = "flex";
        username = "";
        end.style.display = "none";
        count = 0;
        clearInterval(Interval);
        shuffle();
        inputmsec.innerText = "00";
        inputsec.innerText = 7;
        time = 700;
    }
}

startGame();
restartgame();