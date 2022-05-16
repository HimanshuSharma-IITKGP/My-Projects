const container = document.querySelector(".container");
const message = document.querySelector(".message");
const crossOption = document.querySelector(".cross-option");
const circleOption = document.querySelector(".circle-option");
const reset = document.querySelector(".reset");
const computerScore = document.querySelector(".computer-score");
const userScore = document.querySelector(".user-score");
const gameCount = document.querySelector(".games-count") ;
console.log(gameCount);

var gameState =    [["e", "e", "e"],
                    ["e", "e", "e"],
                    ["e", "e", "e"]];
var emptyCells = 9;
var computer = "";
var user = "";


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


crossOption.addEventListener("click", () => {
    if(emptyCells!=9){
        return ;
    }
    user = "times";
    computer = "circle-o";

    startGame() ;
})


circleOption.addEventListener("click", () => {
    if(emptyCells!=9){
        return ;
    }
    user = "circle-o";
    computer = "times";

    startGame() ;
})

reset.addEventListener("click", () => {
    location.reload();
})

function startGame(){
    cells.forEach(cell => {
        cell.addEventListener("click", playerMove);
    });

    if(user=="circle-o"){
        circleOption.style.backgroundColor = "#ff7675";
    }
    else{
        crossOption.style.backgroundColor = "#ff7675";
    }
}


function playerMove() {
    if (this.classList.contains("fa")) {
        return;
    }

    this.classList.add(`fa`);
    this.classList.add(`fa-${user}`);


    gameState[this.getAttribute("cell-row-index")][this.getAttribute("cell-col-index")] = "p";
    
    if (emptyCells == 1) {
        if (evaluate(gameState)>0) {
            message.innerHTML = "I Won";
            computerScore.innerHTML++;
            gameCount.innerHTML++ ;
            removeListener();
            setTimeout(resetContainer, 2000);
            return;
        }

        if (evaluate(gameState)<0) {
            message.innerHTML = "You Won";
            userScore.innerHTML++;
            gameCount.innerHTML++ ;
            removeListener();
            setTimeout(resetContainer, 2000);
            return;
        }

        else {
            message.innerHTML = "DRAW";
            gameCount.innerHTML++ ;
            removeListener();
            setTimeout(resetContainer, 2000);
            return;
        }
        //check for win , lose or draw
    }

    if (evaluate(gameState)>0) {
        removeListener();
        message.innerHTML = "I Won";
        computerScore.innerHTML++;
        gameCount.innerHTML++ ;
        setTimeout(resetContainer, 2000);
        return;
    }

    if (evaluate(gameState)<0) {
        removeListener();
        message.innerHTML = "You Won";
        userScore.innerHTML++;
        gameCount.innerHTML++ ;
        setTimeout(resetContainer, 2000);
        return;
    }


    emptyCells--;
    removeListener() 
    setTimeout(computerMove, 1000);
}



function computerMove() {


    bestMove = findBestMove(gameState) ;
    const row = bestMove.row ;
    const col = bestMove.col ;

    gameState[row][col] = "c";
    emptyCells--;
    const comp = document.querySelector(`[cell-index="${3 * row + col}"]`)
    comp.classList.add(`fa`);
    comp.classList.add(`fa-${computer}`);

    if (evaluate(gameState)>0) {
        message.innerHTML = "I Won";
        computerScore.innerHTML++;
        gameCount.innerHTML++ ;
        removeListener();
        setTimeout(resetContainer, 2000);

        return;
    }

    if (evaluate(gameState)<0) {
        message.innerHTML = "You Won";
        userScore.innerHTML++;
        gameCount.innerHTML++ ;
        removeEventListener();
        setTimeout(resetContainer, 2000);
        return ;
    }

    cells.forEach(cell => {
        cell.addEventListener("click", playerMove);
    });
}




class Move {
    constructor(a, b) {
        this.row = a;
        this.col = b;
    }
};




function isMovesLeft(board) {
    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (board[i][j] == 'e')
                return true;
    return false;
}

function evaluate(b) {
    // Checking for Rows for X or O victory.
    for (let row = 0; row < 3; row++) {
        if (b[row][0] == b[row][1] &&
            b[row][1] == b[row][2]) {
            if (b[row][0] == 'c')
                return +10;
            else if (b[row][0] == 'p')
                return -10;
        }
    }

    // Checking for Columns for X or O victory.
    for (let col = 0; col < 3; col++) {
        if (b[0][col] == b[1][col] &&
            b[1][col] == b[2][col]) {
            if (b[0][col] == 'c')
                return +10;

            else if (b[0][col] == 'p')
                return -10;
        }
    }

    // Checking for Diagonals for X or O victory.
    if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) {
        if (b[0][0] == 'c')
            return +10;
        else if (b[0][0] == 'p')
            return -10;
    }

    if (b[0][2] == b[1][1] && b[1][1] == b[2][0]) {
        if (b[0][2] == 'c')
            return +10;
        else if (b[0][2] == 'p')
            return -10;
    }
    return 0;
}


function minimax(board, depth, isMax) {
    let score = evaluate(board);


    if (score == 10) {
        return score;
    }

    if (score == -10) {
        return score;
    }

    if (isMovesLeft(board) == false) {
        return 0;
    }

    if (isMax) {
        let best = -1000;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == 'e') {
                    board[i][j] = 'c';
                    best = Math.max(best, minimax(board, depth + 1, !isMax));
                    board[i][j] = 'e';
                }
            }
        }
        return best;
    }

    else {
        let best = 1000;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == 'e') {
                    board[i][j] = 'p';
                    best = Math.min(best, minimax(board, depth + 1, !isMax));
                    board[i][j] = 'e';
                }
            }
        }
        return best;
    }
}


function findBestMove(board){
    let bestVal = -1000;
    bestMove = new Move(-1,-1);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == 'e') {
                board[i][j] = 'c';
                let moveVal = minimax(board, 0, false);
                board[i][j] = 'e';
                if (moveVal > bestVal) {
                    bestMove.row = i;
                    bestMove.col = j;
                    bestVal = moveVal;
                }
            }
        }
    }

    return bestMove;
}




function resetContainer() {
    cells.forEach(cell => {
        cell.classList.remove("fa");
        cell.classList.remove("fa-times");
        cell.classList.remove("fa-circle-o");
    });

    gameState =[["e", "e", "e"],
                ["e", "e", "e"],
                ["e", "e", "e"]];

    emptyCells = 9;

    message.innerHTML = "Let's Play Again";

    crossOption.style.backgroundColor = "transparent";
    circleOption.style.backgroundColor = "transparent";
}


function removeListener() {
    cells.forEach(cell => {
        cell.removeEventListener("click", playerMove);
    });
}



