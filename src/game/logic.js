// in ship order, current player selects cell locations to place each ship
    // Once all ships are placed
        // locations are saved to game board

// player 1 and player 2 randomize start the game

// current player selects a cell on grid
    // current player confirms the selected cell

    // Gameboard checks the selected cell index and confirms if there is a ship present.
        // If there is a ship
            // call gameboard.recieveAttack()
                // add selected index to gameboard.landedHits
                // call ship.hit()
                // update gameBoard
                // checks gameboard.shots for any remaining ships
            // next player's turn

        // if there is no ship
            // call gameboard.missAttack()
                // adds selected index to gameboard.missedShots
                // call ship.miss()
                // update gameBoard
                // checks gameboard.shots for any remaining ships
            // next player's turn
            

    

        


// 