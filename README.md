# battleship
ships(){
    newShip -- creates a new ship object
    placeShip -- places a single ship on the game board
    hit -- adds a point of damage to the ships
    destroyed -- counts the total number of hits on a ship object
}

Gameboard(){
    create -- creates a new 13 x 13 gameboard
    labels -- adds labels to the Gameboard
    update -- updates the gameBoard with a hit or miss event
    render -- adds the gameboard to the DOM
    reset -- clears the game board of shots and ships
}

Game(){
    attackLog -- keeps a running total of all of the shots made
    landed -- keeps a record of all shots that hit ships
    missed -- keeps a record of all missed shots
    round -- keeps track of the current round 
    shipsLeft -- keeps track of all remaining ships
    GameOver -- checks if either player has no remaining ships
    Win -- the player with remaining ships is declared the winner
}

Player(){
    new -- creates a new player
    computer -- creates a computer object
    computerLogic -- methods to inteligently play battlefield
}
Page(){
    Create
    Content(){
        header -- appends header content and elements to header
        main -- appends main content and elements to main
        footer -- appends footer content and elements to footer
        shipContent -- appends ship Cards to Ship container
    }
}


Events(){
    boardEvents -- contains event listeners for the board events
    shipEvents -- contains ship event listeners
    pageEvents -- containes page event listeners
}


Pre Game Run Time:
-- General Page is set up.
-- Board is created.
-- Event listeners are attached to the submit button.
    -- prevent default is set for the form

1. Player enters name and clicks start game.
    A. after start is clicked...
        - A player object is created with the name entered by the user in the new user form.
        - A CPU Object is created.
        - The player's ship cards are added to the page's ship container.
        - the player is prompted to place ships on the board.
        -- event listeners are added to the board.


2. The player can click each ship or is automatically prompted to place ships on gameboard.
        - once all 5 ships have been placed the game will randomizes which player will take the first shot.
        - The CPU will place their ships automatically.
        - the starting player selects a cell on the board and clicks it.
        - a shot is added to the gameboard and game attack history.

            - shot is determined to be either a hit or miss.
                -- if the shot is a miss
                    -- ths shot is categorized as a miss
                    -- the gameboard highlights the missed shot.
                    -- next player's turn.

                -- if shot is a hit. {

                    -- the shot is categorized as a hit.
                    -- the ship sustains 1 hit in damage.
                    -- checks current health of ship
                        -- if the ship has reached it's maximum shot limit.
                            -- call ship.destroyed()

                    -- the ship container is updated with the newly damaged ship
                    -- the position of the most recent landed shot is displayed on the ship card.
                    -- check the total number of remaining ships

                        -- update the total ship count
                            -- if either player has every ship destroyed
                                -- call gameOver()
                                -- Determine Winner
                                -- Declare winner
                                -- next player's turn
                }
        
            



        

















You can use mocks to make sure that DOM methods like appendChild are being called, but try your best to keep those things outside of the app logic.

1. Begin your app by creating the Ship factory function.

    A. Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.

    B. REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.

    C. Ships should have a hit() function that increases the number of ‘hits’ in your ship.

    D. isSunk() should be a function that calculates it based on their length and the number of ‘hits’.

2. Create Gameboard factory.

    A. Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.

    B. Gameboards should be able to place ships at specific coordinates by calling the ship factory function.

    C. Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.

    D. Gameboards should keep track of missed attacks so they can display them properly.

    E. Gameboards should be able to report whether or not all of their ships have been sunk.

3. Create Player.
`
    A. Players can take turns playing the game by attacking the enemy Gameboard.

    B. The game is played against the computer, so make the ‘computer’ capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).

4. Create the main game loop and a module for DOM interaction.

    A. At this point it is appropriate to begin crafting your User Interface.

    B. The game loop should set up a new game by creating Players and Gameboards. For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.

    C. We’ll leave the HTML implementation up to you for now, but you should display both the player’s boards and render them using information from the Gameboard class.

        C1. You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.

D. The game loop should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to.

E. Create conditions so that the game ends once one players ships have all been sunk. This function is appropriate for the Game module.

5. Finish it up

    A. There are several options available for letting users place their ships. You can let them type coordinates for each ship, or investigate implementing drag and drop.

    B. You can polish the intelligence of the computer player by having it try adjacent slots after getting a ‘hit’.

    C. Optionally, create a 2 player option that lets users take turns by passing the device back and forth. If you’re going to go this route, make sure the game is playable on a mobile screen and implement a ‘pass device’ screen so that players don’t see each others boards!

new MBA