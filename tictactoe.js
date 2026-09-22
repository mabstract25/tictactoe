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
    // Player Switch after placing their token.
    // console.log(createGameBoard);
    if(player === playerOne){
        currentPlayer = playerTwo;
    }else if(player === playerTwo){
        currentPlayer = playerOne;
    }
    console.log(`${currentPlayer.name}, your turn.`);
    calcPlayerScore(player, playerToken);
}
// TEST ROTATION
playGame(0,0,currentPlayer)
playGame(1,0,currentPlayer)
playGame(0,1,currentPlayer)
playGame(1,1,currentPlayer)
playGame(0,2,currentPlayer)
console.log("END TEST")

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
    console.log(filtered);
    // Push scores to player objects
    let score = player.score;
    score.splice(0,score.length,filtered);
}

function checkWin() {
    // use For to iterate over the winCombos array
    // if winCombo[i].every includes the relevant player token, then: 
    // playerName wins!
    // if total array length reaches 9.
    // https://acsoftware.medium.com/vanilla-javascript-tic-tac-toe-184c5a57d70
    
    
}


