/*user*/ 
let btn = document.querySelectorAll("button");
let u_item = document.getElementsByClassName("user_item")[0]; //

/*computer*/ 
const rps = ["✌", "✊", "🖐"];
let com_item = document.getElementsByClassName("computer_item")[0]; //

/*score*/ 
let user_score = document.querySelector(".score_my");
let com_score = document.querySelector(".score_com");


let user_num;
let randomNum;

var final_user;

// 컴퓨터 아이템 랜덤으로
function com_random () {
    randomNum =(Math.floor(Math.random()*3));
    let rand_num = rps[randomNum];
    setTimeout(() => {
        com_item.innerText = rand_num;
        return randomNum;
        }, 300);
}
// user가 선택한 아이템 화면에 출력
function User(e) 
{   
    console.log(e);
    if (e == 0) {
        u_item.innerText = "✌";        
     }
     else if (e==1) {
        u_item.innerText = "✊";
     }
     else if (e==2) {
        u_item.innerText = "🖐";
     }
}
// 결과 출력
function result(user_num, randomNum) 
{   
    if ((user_num == 0 && randomNum == 2) ||
        (user_num == 1 && randomNum == 0) ||
        (user_num == 2 && randomNum == 1) )
       {
         user_score.innerText++;
         document.getElementById("userbackground").style.backgroundColor="thistle";
         document.getElementById("computerbackground").style.backgroundColor="white";
       }
    if ((randomNum == 0 && user_num == 2) ||
        (randomNum == 1 && user_num == 0) ||
        (randomNum == 2 && user_num == 1) )
        {
          com_score.innerText++; 
          document.getElementById("userbackground").style.backgroundColor="white";
          document.getElementById("computerbackground").style.backgroundColor="thistle";
        }
    if (randomNum == user_num){
        document.getElementById("userbackground").style.backgroundColor="white";
        document.getElementById("computerbackground").style.backgroundColor="white";
    }    

}

function btn_Click () {
    for(var i = 0; i < btn.length; i ++) {
        btn[i].onclick = function(e) {
          if(e.target.value==3) {
            u_item.innerText = "?";
            com_item.innerText="?";   
            user_score.innerText=0;
            com_score.innerText=0; 
            document.getElementById("userbackground").style.backgroundColor="white";
            document.getElementById("computerbackground").style.backgroundColor="white";
         }
         else{
            com_random();
            User(e.target.value);
            user_num = e.target.value;
            setTimeout(() => {
            result(user_num, randomNum);
            }, 500);
         }
        }
    }
    
}

function gameStart() {
    btn_Click();
}

gameStart();