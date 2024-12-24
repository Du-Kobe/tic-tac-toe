const playBtn = document.getElementById("form-button");
const formDisplay = document.getElementById("player-information")
const cancelBtn=document.getElementById("cancel");
const startBtn=document.getElementById("start-game");
const boardDisplay = document.getElementById("board-display");
const playerInfo = document.getElementById("player-display");
const playAgainBtn=document.getElementById("play-again-button");
const cancelAgainBtn=document.getElementById("cancel-again");

playAgainBtn.addEventListener("click",()=>{
    const squares = document.querySelectorAll(".square-grid")
    squares.forEach((square)=>{
        square.innerHTML=""
    })
    const playAgainForm = document.getElementById("play-again");
    playAgainForm.style.visibility="hidden";
    boardDisplay.style.border="2px solid var(--dark-background-color)"
    createGameBoard();
    displayPlayerInformation();
    displaySquare()
})

cancelAgainBtn.addEventListener("click",()=>{
   const playAgainForm = document.getElementById("play-again");
   playAgainForm.style.visibility="hidden";
   boardDisplay.style.border="none";
   boardDisplay.innerHTML="";
   playerInfo.innerHTML="";
   const playerOne = document.getElementById("player-one").value;
   playerOne = "";
   const playerTwo=document.getElementsById("player-two").value;
   playerTwo="";

   
})

playBtn.addEventListener("click", ()=>{
    formDisplay.style.display = "block"
})

cancelBtn.addEventListener("click",()=>{
    formDisplay.style.display="none";
    
})

startBtn.addEventListener("click",()=>{
    const playerOneInformation = document.getElementById("player-one").value ;
    const playerTwoInformation = document.getElementById("player-two").value;
    boardDisplay.style.border="2px solid var(--dark-background-color)"
    if (playerOneInformation === "" || playerTwoInformation==="") {
        alert("Please fill in player's name")
    } else {
        players.playerOne.name=playerOneInformation;
        players.playerTwo.name=playerTwoInformation;
        formDisplay.style.display="none";
        createGameBoard()
        displayPlayerInformation()
        displaySquare()
    }
   
})

function displaySquare(){
        const squares=document.querySelectorAll(".square-grid");
        squares.forEach((square)=>{
            square.addEventListener("click", ()=>{
                if (square.innerHTML==="") {
                    if (players.playerOne.active===true) {
                        square.innerHTML= "X"
                        players.playerOne.active = false;
                        players.playerTwo.active = true;
                       

                    } else if(players.playerTwo.active===true) {
                        square.innerHTML="O"
                        players.playerTwo.active=false;
                        players.playerOne.active=true;
                } 
                isThereAWinner();
                reset()
                } else {alert("Please choose another square!")}
        })
        })
    
}

function isThereAWinner(){
    let winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    const squares = document.querySelectorAll(".square-grid");
    const squareInfo = Array.from(squares).map((square)=>square.innerHTML);
    squares.forEach((square)=>{
        for (condition of winningConditions){
            const [a,b,c]=condition;
            if (squareInfo[a] !== "" && squareInfo[a]===squareInfo[b] && squareInfo[a]===squareInfo[c]) {
                winnerPresent()
                return;
            }
        }
    })
}


function winnerPresent () {
    const squares = document.querySelectorAll(".square-grid");
    squares.forEach((square)=>{
        square.innerHTML=""
    })
    const playAgainForm = document.getElementById("play-again");
    playAgainForm.style.visibility="visible";
}

function reset(){
    const squares=document.querySelectorAll(".square-grid");
    let filledSquares = 0;
    let emptySquares = 9;
    squares.forEach((square)=>{
        if (square.innerHTML != "") {
            filledSquares ++
            emptySquares --
        } 
    })
    if (emptySquares === 0) {
        squares.forEach((square)=>{
            square.innerHTML=""
        })
    }
}

function createGameBoard(){
    boardDisplay.innerHTML= "";
    for (let i =0 ; i<3; i++) {
        for (let j=0; j<3; j++) {
            const square =  document.createElement("div");
            square.innerHTML=""
            square.classList.add("square-grid");
            boardDisplay.appendChild(square)
        }
    }

}

function displayPlayerInformation(){
    playerInfo.innerHTML='';
    const playerOneInformation = document.getElementById("player-one").value;
    const playerTwoInformation = document.getElementById("player-two").value;
    playerInfo.innerHTML = `<a id="player-text">Player One:</a> ${playerOneInformation} <a id="player-text">|</a> <a id="player-text">Player Two:</a> ${playerTwoInformation}`;
   
}





const players = {
    playerOne: {
        name: "",
        marker: "X",
        active: true,
    },
    playerTwo: {
        name: "",
        marker: "O",
        active: false,
    }
}


