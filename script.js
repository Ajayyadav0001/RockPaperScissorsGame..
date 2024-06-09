let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    //rock,paper,scissor
};

const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game Draw.Play Again.."
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("you win!");
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}else{
    compScore++;
    compScorePara.innerText=compScore;
    console.log("you lose!");
    msg.innerText=`You Loss! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor="red";
}
}

const playGame=(userChoice)=>{
    console.log("user choice",userChoice);
    //Generate computer choice;making all in funtion called-> Modular way of programming
    const compChoice=genCompChoice();
    console.log("computer choice",compChoice);

    if(userChoice=== compChoice){
        //Draw game
        drawGame();
    }else{
      userWin=true;  
      if(userChoice==="rock"){
        //scissor,paper
        userWin=compChoice==="paper"?false:true;
      }else if(userChoice==="paper"){
        //rock,scissor
        userWin=compChoice==="scissors"?false:true;
      }else{
        //rock,paper
        userWin=compChoice==="rock"? false :true;
      }
      showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});