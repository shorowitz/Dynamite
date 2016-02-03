
function Block() {
  this.shown = true;
  this.dynoCarrier = false;

  this.hide = function() {
    if (this.shown) {
      return this.shown = false;
    } else {
      return;
    };
  }

  this.playable = function() {
    if (this.shown) {
      return true;
    } else {
      return false;
    };
  }
}

function Tower() {
  this.tower = [];
  this.currentPlayer = '';
  this.winner = '';

  this.startGame = function() {
    
  }
}
