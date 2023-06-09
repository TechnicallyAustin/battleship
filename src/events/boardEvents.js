export function boardEvents(){
    const columnArray = []
    const cellArray = []
    const rows = document.querySelectorAll('.board-row');

    const newBoardEvent = {
        hoverNumbers: function(cell){
            cell.addEventListener('mouseenter', () => {
                cell.classList.add('hover');
                console.log("hover")
            });

            cell.addEventListener('mouseleave', () => {
                cell.classList.remove('hover');
                console.log("leave")
            });
                
        },
        attack: function(cell){
            cell.addEventListener('click', function(){
                cell.classList.add('attack');
                console.log("clciked")
            });
        }
    };

    for (let i = 1; i < rows.length; i ++){
        let col = rows[i]
        console.log("col", col)
        for (let j = 0; j < col.childNodes.length; j ++){
            let cell = col.childNodes[j]
            console.log("cell", cell)
            newBoardEvent.hoverNumbers(cell)
            newBoardEvent.attack(cell)
        }


    }
    


        





        

}