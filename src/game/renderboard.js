export function renderGameBoard(){
      const rows = 14;
      const cols = 14;
      const gameBoard = [];

      for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        gameBoard.push(row);
        for (let j = 0; j < cols; j++) {
          let cell = document.createElement("div");
          cell.setAttribute("class", "cell");
          row.appendChild(cell);
          gameBoard.push(cell);
        }
      }
      return gameBoard;
    
}