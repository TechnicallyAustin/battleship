# battleship
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