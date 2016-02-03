# Dynamite

Dynamite is a game that hides a piece of dynamite within a tower made of blocks. Two players toggle between selecting blocks to remove them from the tower. If one player selects the block with the hidden dynamite, the game is over. If the dynamite is not selected after a player removes a block, the dynamite reveals itself and then moves to another position before the next player has a turn.

## Building the game

### Block constructor

##### Attributes
* `shown` holds the boolean value for whether or not the block is visible
* `dynoCarrier` holds the boolean value for whether or not the block has been assigned the dynamite

##### Methods
* `hide()` a function that sets the block's `shown` value to false
* `playable()` a function that determines whether or not the block can be selected


### Tower constructor

##### Attributes
* `tower` an empty array
* `currentPlayer` an empty string
* `winner` an empty string

##### Methods
* `startGame()` a function that generates Block objects and pushes them into the tower array; and also calls the `assignDynamite` function
* `assignDynamite()` a function that sets a random block's `dynoCarrier` value to true
* `makePlay()` a function that allows the currentplayer to select a playable block, and then either removes the block and calls `nextTurn` or blows up the dynamite and calls `assignWinner`
* `nextTurn()` a function that sets the current dynoCarrier's value back to false, and then runs the assignDynamite function on an array of the remaining blocks that have a `shown` value of true.
* `assignWinner()` a function that determines which player blew up the dynamite and declares a winner


### game object literal
* `makeTower()` makes a new Tower object
* `firstPlayer()` randomly determines who is going to be player1 and who is going to be player2 based on their position in front of the computer screen
* `start()` starts the game and calls the `startGame()` function
* `play()` calls the makePlay function on the Tower object
* `isOver()` determines when the game is over
* `reset()` resets the game  

### $Jquery
* append the blocks and the tower to appropriate DOM elements
* assign prompts/messages to the user between turns
* program the animations of the game 
