# Dynamite

Dynamite is a game that hides a piece of dynamite within a tower made of blocks. Two players toggle between selecting blocks to remove them from the tower. If one player selects the hidden dynamite, the game is over. If the dynamite is not selected after a player removes a block, the dynamite reveals itself and then moves to another position before the next player has a turn.

## Building the game

### Block constructor

##### Attributes
* `shown` holds the boolean value for whether or not the block is visible
* `dynoCarrier` holds the boolean value for whether or not the block has been assigned the dynamite

##### Methods
* `hide()` a function that sets the block object's `shown` key to false
* `playable()` a function that determines whether or not a player can select the block object


### Tower constructor

##### Attributes
* `tower` an empty array
* `currentPlayer` an empty string
* `winner` an empty string

##### Methods
* `makeTower()`a function that generates Block objects and pushes them into the tower array
* `assignDynamite()` a function that sets a random block's `dynoCarrier` value to true
* `startGame()` a function that calls the
* `makePlay()`
* `nextTurn()`
* `assignWinner()`
