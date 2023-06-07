const { gameBoardOperations } = require("../game/gameboard");


export function mainContent(){
    const main = document.querySelector('.main');
    const mainElements = {
        shipContainer: function(){
            const container = document.createElement('div');
            container.setAttribute('class','ship-container w-100 h-100 bg-secondary d-flex flex-column justify-content-start align-items-start');
            main.appendChild(container)

            const containerElements = {
                label: function(){
                    const createLabel = document.createElement('p')
                    createLabel.setAttribute('class', 'ship-container-label w-100 mb-0 fs-2 text-center');
                    createLabel.textContent = 'Your Ships';
                    container.appendChild(createLabel)
                },
                displayShips: function(){
                    const shipContainer = document.createElement('div');
                    shipContainer.setAttribute('class','ship-container-display w-100');
                    container.appendChild(shipContainer)
                }
            }
            containerElements.label();
            containerElements.displayShips();
        },
        addboard: function(){
            const content = gameBoardOperations.createGameBoard();
            main.appendChild(content)
        },
        gameLog: function(){
            const log = document.createElement('div');
            log.setAttribute('class', 'game-log w-100 h-100 bg-light');
            main.appendChild(log)

            const logElements = {
                label: function(){
                    const createLabel = document.createElement('p')
                    createLabel.setAttribute('class', 'game-Log-label w-100 mb-0 fs-2 text-center');
                    createLabel.textContent = 'Attack History';
                    log.appendChild(createLabel)
                },
                historyContainer: function(){
                    const container = document.createElement('div');
                    container.setAttribute('class', 'game-Log-history w-100');
                    log.appendChild(container)
                }
            }
            logElements.label();
            logElements.historyContainer();
        }
    }
    mainElements.addboard();
    mainElements.shipContainer();
    mainElements.gameLog();
}

