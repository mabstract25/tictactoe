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
            console.log(`${name}, your token is ${token}`)
        },
        token};
}

const playerOne = createPlayer("Player One","X")
const playerTwo = createPlayer("Player Two","O")
playerOne.greeting();
playerTwo.greeting();


function playGame(row,column) {
    playerToken = token;
    createGameBoard[row].splice(column, 1, playerToken)

    console.log(createGameBoard[row]);
} 

console.log(createGameBoard);
