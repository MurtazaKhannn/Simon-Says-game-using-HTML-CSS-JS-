let gameSeq = [];
let userSeq = [];

let btns = ["red" , "yellow" , "purple" , "green"];

let started = false ;
let level = 0 ;
let HS = 0 ;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
// h3.innerText = `Highest Score : ${level}` ;

document.addEventListener("keypress" , function () {
    if(started == false ){
        console.log("game is started");
        started = true ;
        highestScore();
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } , 100);
}

function levelUp(){
    userSeq = [];
    level++ ;
    // HS++ ;
    h2.innerText = `level ${level}` ;
    // h3.innerText = `Highest Score : ${HS}` ;
    let randIdx = Math.floor(Math.random()*3);
    let randClr = btns[randIdx];
    let randBtn = document.querySelector(`.${randClr}`);
    gameSeq.push(randClr);
    console.log(gameSeq);
    console.log(randBtn);
    btnFlash(randBtn) ;
}

function checkAns(idx){
    // console.log("current lvl : " , level);
    // let idx = level-1 ;
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 500);
        }
        // console.log("same value");
    }
    else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red" ;
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "black" ;
        } , 500)
        highestScore(HS);
        reset();
    }
}

function btnPress(){
    let btn = this ;
    // console.log(btn);
    btnFlash(btn);

    userClr = btn.getAttribute("id");
    console.log(userClr);
    userSeq.push(userClr);

    checkAns(userSeq.length - 1) ;
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    started = false ;
    gameSeq = [] ;
    userSeq = [] ;
    level = 0 ;
}

function highestScore(Hlvl) {
    HS++ ;
    h3.innerText = `Highest Score : ${HS}` ;
    if(HS < level){
        HS = level ;
        h3.innerText = `Highest Score : ${HS}` ;
    }
}

