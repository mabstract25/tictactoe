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

