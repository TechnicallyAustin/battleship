export function boardEvents(){
    const cellArray = []
    const columnArray = []




        
    const newBoardEvent = {
            hoverNumbers: function(cells){

                    cell[i].addEventListener('mouseenter', () => {
                        cell[i].classList.add('hover');
                        console.log("hover")
                    })

                    cell[i].addEventListener('mouseleave', () => {
                        cell[i].classList.remove('hover');
                        console.log("leave")
                    })
                
        },
        selectCell: function(){
            rows.forEach(function(cell){
                cell.addEventListener('click', function(){
                    gameboard.classList.add('selected');
                    console.log("clciked")
                })
            })
        }
    };
    //newBoardEvent.selectCell();
    newBoardEvent.hoverNumbers(cellArray);

}