export function boardEvents(){
    const rows = document.querySelectorAll('.board-row');
    const alphaLabelValues = ["","A","B","C","D","E","F","G","H","I","J","K","L","M"];
    const roundCounter = document.querySelector(".game-log-round-count")
    let count = 1
    const newBoardEvent = {
        hoverNumbers: function(cell){
            cell.addEventListener('mouseenter', () => {
                cell.classList.add('hover');
            });

            cell.addEventListener('mouseleave', () => {
                cell.classList.remove('hover');
            });
        },
        updateRound: function(){
            roundCounter.textContent = `Round: ${count++}`

        },
        populateLog: function(cell){
            console.log(cell.id);
            const log = document.querySelector('.game-log-history');
            const message = document.createElement("p");
            message.setAttribute('class', 'game-log-entry text-white mx-3');
            log.appendChild(message);
            message.textContent = ` current player attacked ${cell.id}`
            this.updateRound()
        },
        attack: function(cell){
            cell.addEventListener('click', function(){
                cell.classList.add('attack');
                newBoardEvent.populateLog(cell);
            });
        }
    };

    for (let i = 1; i < rows.length; i ++){
        let col = rows[i]
        //console.log("col", col)
        for (let j = 0; j < col.childNodes.length; j ++){
            let cell = col.children[j]
            cell.setAttribute("id", `${alphaLabelValues[j]}-${i}`);
            //console.log("cell", cell)
            newBoardEvent.hoverNumbers(cell)
            newBoardEvent.attack(cell)
        }
    }
}