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

let token = "";


function createPlayer(name, token) {
    
    return {
        name,
        greeting() {
            // Replace console.log with alert or similar when UI is built.
            console.log(`${name}, your token is ${token}`)
        },
        token};
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
    console.log(createGameBoard);
    if(player === playerOne){
        currentPlayer = playerTwo;
    }else if(player === playerTwo){
        currentPlayer = playerOne;
    }
    console.log(`${currentPlayer.name}, your turn.`);
}
// TEST ROTATION
playGame(0,0,currentPlayer)
playGame(1,0,currentPlayer)
playGame(0,1,currentPlayer)
playGame(1,1,currentPlayer)
playGame(0,2,currentPlayer)
console.log("END TEST")

function scoreGame() {
    // Expanded gameboard into a single array, but still need to figure out how to check this against conditions.
    // TRY > Adding a record of moves played to each player. This array can then be checked against a list of 'wins'.
    const arr1 = createGameBoard[0];
    const arr2 = createGameBoard[1];
    const arr3 = createGameBoard[2];
    const testarr = arr1.concat(arr2,arr3);
    console.log(testarr);
    const conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
}

scoreGame();

