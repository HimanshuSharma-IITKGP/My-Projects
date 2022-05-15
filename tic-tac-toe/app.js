const container = document.querySelector(".container");
const message = document.querySelector(".message") ;
const crossOption = document.querySelector(".cross-option") ;
const circleOption = document.querySelector(".circle-option") ;
const reset = document.querySelector(".reset") ;
const userScore = document.querySelector(".user-score") ;
const computerScore = document.querySelector(".computer-score") ;
console.log(message);
// console.log(crossOption , circleOption);
// console.log(container);

for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.id = `cell-${i + 1}`;
    cell.setAttribute("cell-index", i);
    cell.setAttribute("cell-row-index", Math.floor(i / 3)); // 0 indexed cell index
    cell.setAttribute("cell-col-index", i - (Math.floor(i / 3)) * 3)
    cell.classList.add("cell");
    container.appendChild(cell);
}

const cells = Array.from(document.querySelectorAll(".cell"));
var gameState =[["e", "e", "e"],
                ["e", "e", "e"],
                ["e", "e", "e"]];
var emptyCells = 9;
var user = "";
var computer = "";
// console.log(cells);


function userMove() {
    if (this.classList.contains("fa")) {
        return;
    }

    this.classList.add(`fa`);
    this.classList.add(`fa-${user}`);

    
    gameState[this.getAttribute("cell-row-index")][this.getAttribute("cell-col-index")] = "p";
    if (emptyCells == 1) {
        // console.log(gameState);
        // alert("checking for win");
        if (isWinning(["c", "c", "c"])) {
            message.innerHTML = "I Won" ;
            computerScore.innerHTML ++ ;
            removeListener();
            setTimeout(resetContainer,2000) ;
            return ;
        }

        if (isWinning(["p", "p", "p"])) {
            message.innerHTML = "You Won" ;
            userScore.innerHTML ++ ;
            removeListener();
            setTimeout(resetContainer,2000) ;
            return ;
        }

        else {
            message.innerHTML = "DRAW" ;
            removeListener();
            setTimeout(resetContainer,2000) ;
            return ;
        }
        //check for win , lose or draw
    }
    
    if (isWinning(["c", "c", "c"])) {
        removeListener();
        message.innerHTML = "I Won" ;
        computerScore.innerHTML ++ ;
        setTimeout(resetContainer,2000) ;
        return ;
    }

    if (isWinning(["p", "p", "p"])) {
        removeListener();
        message.innerHTML = "You Won" ;
        userScore.innerHTML ++ ;
        setTimeout(resetContainer,2000) ;
        return ;
    }


    emptyCells--;

    console.log(`emptyCells => ${emptyCells}`);
    setTimeout(computerMove, 1000);
}



function computerMove() {


    var row = Math.floor(Math.random() * 3);
    var col = Math.floor(Math.random() * 3);

    while (gameState[row][col] != "e") {
        row = Math.floor(Math.random() * 3);
        col = Math.floor(Math.random() * 3);
    }

    gameState[row][col] = "c";
    emptyCells -- ;
    console.log(`emptyCells => ${emptyCells}`);
    console.log(row, col);
    const comp = document.querySelector(`[cell-index="${3 * row + col}"]`)
    comp.classList.add(`fa`);
    comp.classList.add(`fa-${computer}`);

    if(isWinning(["c","c","c"])){
        message.innerHTML = "I Won" ;
        userScore.innerHTML ++ ;
        removeListener();
        setTimeout(resetContainer,2000) ;

        return ;
    }

    if(isWinning(["p","p","p"])){
        message.innerHTML = "You Won" ;
        userScore.innerHTML ++ ;
        
        removeEventListener() ;
        setTimeout(resetContainer,2000) ;
        
    }
}

function isWinning(player) {
    if (JSON.stringify(gameState[0])==JSON.stringify(player) || JSON.stringify(gameState[1])==JSON.stringify(player) || JSON.stringify(gameState[2])==JSON.stringify(player)) {
        console.log("row matched");
        return true;
    }


    for (let j = 0; j < 3; j++) {
        let k = 0;
        for (let i = 0; i < 3; i++) {
            if (gameState[i][j] == player[0]) {
                k++;
            }
        }

        if (k == 3) {
            console.log(`column ${j} Matched`);
            return true;
        }
    }


    if (gameState[0][0] == player[0] && gameState[1][1] == player[0] && gameState[2][2] == player[0]) {
        console.log("first diagonal matched");
        return true;
    }

    if (gameState[0][2] == player[0] && gameState[1][1] == player[0] && gameState[2][0] == player[0]) {
        console.log("Second Diagonal Matched");
        return true;
    }

    return false;
}


function resetContainer(){
    cells.forEach(cell => {
        cell.removeEventListener("click",userMove) ;
        cell.classList.remove("fa") ;
        cell.classList.remove("fa-times") ;
        cell.classList.remove("fa-circle-o") ;
    });

    gameState =[["e", "e", "e"],
                ["e", "e", "e"],
                ["e", "e", "e"]];

    emptyCells = 9 ;

    message.innerHTML = "Let's Play Again !" ;

    crossOption.style.opacity = "1" ;
    circleOption.style.opacity = "1" ;
}

function removeListener(){
    cells.forEach(cell => {
        cell.removeEventListener("click",userMove) ;
    });
}

crossOption.addEventListener("click",()=>{
    user = "times" ;
    computer = "circle-o";

    cells.forEach(cell => {
        cell.addEventListener("click", userMove);
    });

    crossOption.style.opacity = "0" ;
    circleOption.style.opacity = "0" ;
})


circleOption.addEventListener("click",()=>{
    user = "circle-o" ;
    computer = "times";

    cells.forEach(cell => {
        cell.addEventListener("click", userMove);
    });

    crossOption.style.opacity = "0" ;
    circleOption.style.opacity = "0" ;
})

reset.addEventListener("click" , ()=>{
    location.reload() ;
})

