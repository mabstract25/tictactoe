const container = document.querySelector('.container');
const renderBoard = (() => {
    let gridRow = 0;
    let gridCol = 0
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            
            const rowLink = document.createElement("a");
            rowLink.setAttribute('href', "");            
            const row = document.createElement("div");
            row.classList.add('cell')
            rowLink.appendChild(row)
            let cellRow = gridRow;
            let cellCol = gridCol;
            
            rowLink.addEventListener("click", function(e) {
                e.preventDefault();
                e.target.textContent = currentPlayer.token;
                playGame(cellCol,cellRow,currentPlayer);
            })

            container.appendChild(rowLink);
            row.textContent = "";
            gridRow++
        };
        gridRow = 0;
        gridCol++
        
    };
    
})();

const createGameBoard = (() => { 
    const rows = 3;
    const cols = 3;
    let gameBoard = [];

    for (let i = 0; i < rows; i++) {
        gameBoard[i] = [];
        for (let j = 0; j < cols; j++) {
            gameBoard[i].push("");
        }
    }
    
    return gameBoard;
})();

const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
];

let token = "";


function createPlayer(name, token) {
    let score = [];
    return {
        name,
        greeting() {
            // Replace console.log with alert or similar when UI is built.
            console.log(`${name}, your token is ${token}`)
        },
        score,
        token
    };
}
// Player Setup
const playerOne = createPlayer("Player One","X")
const playerTwo = createPlayer("Player Two","O")
playerOne.greeting();
playerTwo.greeting();

let currentPlayer = playerOne;
console.log(`${currentPlayer.name}, you start the game.`)


function playGame(row,column,player) {
    playerToken = player.token;
    createGameBoard[row].splice(column, 1, playerToken);
    
    // displayController();
    // Player Switch after placing their token.
    if(player === playerOne){
        currentPlayer = playerTwo;
    }else if(player === playerTwo){
        currentPlayer = playerOne;
    }
    console.log(`${currentPlayer.name}, your turn.`);
    calcPlayerScore(player, playerToken);
    checkWin(player, playerToken);
}


function calcPlayerScore(player,token) {
    // Create rules to match player token
    function isToken(t) {
        if(t === token){
            return token;
        }if (t !== token){
            return "";
        }
    };
    // Take gameBoard array and combine
    const arr1 = createGameBoard[0];
    const arr2 = createGameBoard[1];
    const arr3 = createGameBoard[2];
    const combinedArr = arr1.concat(arr2,arr3);
    // Filter for token matches
    const filtered = combinedArr.map(isToken);
    // Push scores to player objects
    let score = player.score;
    score.splice(0,score.length,filtered);
}

function checkWin(player,token) {
    // Iterate over all possible winCombos.
    for(let i = 0; i < winCombos.length; i++) {
        let p1 = winCombos[i][0];
        let p2 = winCombos[i][1];
        let p3 = winCombos[i][2];

        if(player.score[0][p1] === token && player.score[0][p2] === token && player.score[0][p3] === token) {
            alert(`${player.name} wins!`)
        }else {
        }
        // if total array length reaches 9, declare draw.
    }
    
}

// function displayController() {
//     for(let i = 0; i < 3; i++) {
//         console.log(`${createGameBoard[i]}`);
//     }
    
// }

