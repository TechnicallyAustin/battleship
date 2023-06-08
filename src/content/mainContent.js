const { gameBoardOperations } = require("../game/gameboard");


export function mainContent(){
    const main = document.querySelector('.main');
    const mainElements = {
      shipContainer: function () {
        const container = document.createElement("div");
        container.setAttribute(
          "class",
          "ship-container w-100 h-100 d-flex flex-column justify-content-start align-items-start"
        );
        main.appendChild(container);

        const containerElements = {
          label: function () {
            const labelContainer = document.createElement("div");
            labelContainer.setAttribute(
              "class",
              "ship-container-label w-100 mb-0 fs-2 text-center text-white"
            );
            container.appendChild(labelContainer);

            const createLabel = document.createElement("p");
            createLabel.setAttribute(
              "class",
              "ship-container-label w-100 mb-0 fs-2 text-center text-white bg-black bg-opacity-50"
            );
            createLabel.textContent = "Your Ships";
            labelContainer.appendChild(createLabel);
          },
          displayShips: function () {
            const shipContainer = document.createElement("div");
            shipContainer.setAttribute(
              "class",
              "ship-container-display w-100 h-100 border-bottom border-2 border-white"
            );
            container.appendChild(shipContainer);
          },
        };
        containerElements.label();
        containerElements.displayShips();
      },
      addboard: function () {
        const content = gameBoardOperations.createGameBoard();
        main.appendChild(content);
      },
      boardDisplay: function () {
        const createDisplay = document.createElement("div");
        createDisplay.setAttribute(
          "class",
          "board-display w-100 h-75 d-flex justify-content-center align-items-center bg-black bg-opacity-25 mx-2 border border-Green border-2"
        );

        const displayValue = document.createElement("p");
        displayValue.setAttribute(
                  "class",
                  "board-display-value w-100 h-100 d-flex justify-content-center align-items-center fs-3 mx-3 text-white"
                );
        displayValue.textContent = "Board Display value Goes here!";
        createDisplay.appendChild(displayValue);
        main.appendChild(createDisplay);
      },
      gameLog: function () {
        const log = document.createElement("div");
        log.setAttribute("class", "game-log w-100 h-100");
        main.appendChild(log);

        const logElements = {
          label: function () {
            const labelContainer = document.createElement("div");
            labelContainer.setAttribute(
              "class",
              "game-Log-label w-100 mb-0 fs-2 text-center text-white bg-black bg-opacity-25"
            );
            log.appendChild(labelContainer);

            const createLabel = document.createElement("p");
            createLabel.setAttribute(
              "class",
              "game-Log-label w-100 mb-0 fs-2 text-center"
            );
            createLabel.textContent = "Attack History";
            labelContainer.appendChild(createLabel);
          },
          historyContainer: function () {
            const container = document.createElement("div");
            container.setAttribute(
              "class",
              "game-Log-history w-100 h-100 bg-black bg-opacity-50 border border-1 border-white"
            );
            log.appendChild(container);
          },
          currentRound: function () {
            const container = document.createElement("div");
            container.setAttribute(
              "class",
              "game-Log-current-round w-100 h-100 bg-black bg-opacity-50 text-white text-center"
            );
            log.appendChild(container);

            const roundCount = document.createElement("p");
            roundCount.setAttribute(
              "class",
              "game-Log-round-count w-100 h-100 fs-4 mb-0"
            );
            roundCount.textContent = "Current Round: ###";
            container.appendChild(roundCount);
          },
        };
        logElements.label();
        logElements.historyContainer();
        logElements.currentRound();
      },
    };
    mainElements.addboard();
    mainElements.shipContainer();
    mainElements.gameLog();
    mainElements.boardDisplay();
}

