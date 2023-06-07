

function gameBoard(){
  // Gameboard is 14 x 14
  // A-M && 1-13

  // Game Container
    //const gameContainer = document.createElement("div");
    //gameContainer.setAttribute("class", "game-container");
}
  //gameboard operations
export const gameBoardOperations = {
    boardArray: [],
    createGameBoard: function(){
        const gameBoard = document.createElement("div");
        gameBoard.setAttribute("class", "game-board w-100 h-100");
        const rows = 14;
        const cols = 14;
        for (let i = 0; i < rows; i++) {
            let row = document.createElement("div");
            row.setAttribute("class", `board-row row-${i}`);
            this.boardArray.push(row);
            gameBoard.appendChild(row);
            for (let j = 0; j < cols; j++) {
                let cell = document.createElement("div");
                cell.setAttribute("class", `board-cell cell-${j} d-flex justify-content-center align-items-center`);
                row.appendChild(cell);
                this.boardArray.push(cell);
            }
        }
        return gameBoard;
    },
    boardLabels: function(){
        const createLabels = {
            createAlphaLabels: function(){
                const alphaLabels = document.querySelector(".row-0");
                const alphaLabelValues = ["","A","B","C","D","E","F","G","H","I","J","K","L","M"]
                for (let i = 0; i < alphaLabels.children.length; i++) {
                    let cell = alphaLabels.children[i];
                    
                    let valueContainer = document.createElement("div");
                    valueContainer.setAttribute("class", "alpha-value-container w-100 h-100 d-flex justify-content-center align-items-center bg-black text-white");
                    cell.appendChild(valueContainer);
                    
                    let value = document.createElement("p")
                    value.setAttribute("class", "value fs-2");
                    value.textContent = alphaLabelValues[i]
                    valueContainer.appendChild(value)
                }
            },
            createNumLabels: function(){
                const rows = document.querySelectorAll(".board-row");
                for (let i = 1; i < rows.length; i++) {
                    let row = rows[i];
                    let cell = row.firstChild;

                    let valueContainer = document.createElement("div");
                    valueContainer.setAttribute("class", "number-value-container w-100 h-100 d-flex justify-content-center align-items-center bg-black text-white");
                    cell.appendChild(valueContainer);

                    let value = document.createElement("p")
                    value.setAttribute("class", "value fs-2 mb-0");
                    value.textContent = i
                    valueContainer.appendChild(value);

                }
            }
        }
        createLabels.createAlphaLabels();
        createLabels.createNumLabels();


    },
    updateGameBoard: function(){},
    resetGameBoard: function(){},
    renderGameBoard: function(){},
    winner: function(){},
    gameOver: function(){},
    roundCounter: function(){},
    startingPlayer: function(){}
};

  // GameBoard Ship Operations
  const gameBoardShips = {
    placeShips: function () {},
    remainingShips: function () {},
    removeShip: function () {},
  };

  // GameBoard Attack Log Operations
    const gameBoardAttackLog = {
      missedShots: function () {},
      landedShots: function () {},
      recieveAttack: function () {},
    };

//}







