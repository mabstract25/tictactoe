function createGameBoard(name) { 
    const rows = 3;
    const cols = 3;
    let gameBoard = [];

    for (let i = 0; i < rows; i++) {
        gameBoard[i] = [];
        for (let j = 0; j < cols; j++) {
            gameBoard[i].push("");
        }
    }

    return {name, gameBoard};
}

const playerOne = {

}

const playerTwo = {

}

function playGame() {

} 

const matt = createGameBoard("Matt");

console.log(matt)
