$(function () {
  console.log('linked');

var $container = $('.game-container');


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
}

function Tower() {

  this.towerArray = [];
  this.currentPlayer = '';
  this.loser = '';
  this.shownBlocksArray = [];
  this.dyno = {};


  this.startGame = function() {
    for (var i =0; i < 18; i++) {
      var block = new Block();
      this.towerArray.push(block);
    }

    this.currentPlayer = 'Player1';
    this.getshownBlocks();
  }

  this.getshownBlocks = function() {
    for (var i=0; i < this.towerArray.length; i++) {
      if (this.towerArray[i].shown === true) {
        this.shownBlocksArray.push(this.towerArray[i]);

        var $blocks = $('<div>');
        $blocks.addClass('blocks').attr('id', i);
        $container.append($blocks);
      };
    };
    this.assignDynamite();
    this.thoseBlocksTho();
  };

  this.assignDynamite = function() {
    this.dyno = this.shownBlocksArray[Math.floor(Math.random()*this.shownBlocksArray.length)]; //source: StackOverflow - http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
    this.dyno.dynoCarrier = true;
  };

  this.thoseBlocksTho = function() {
  $('.blocks').each(function (i) { //source: DOUG!
  $('.blocks').eq(i).on('click', function(e) {
    var x = $(e.target).attr('id');
    this.makePlay(this.shownBlocksArray[x])
  });
    });
};

  this.makePlay = function(playedBlock) {
    if (playedBlock.dynoCarrier === false) {
      playedBlock.hide();
      this.nextTurn();
    } else if (playedBlock.dynoCarrier === true) {
      this.assignLoser(this.currentPlayer);
    } else {
      return;
    }
  };

  this.nextTurn = function() {
    this.dyno.dynoCarrier = false;
    this.shownBlocksArray = [];
    $('.blocks').remove();
    this.getshownBlocks();
    if (this.currentPlayer === 'Player1') {
      this.currentPlayer = 'Player2';
    } else {
      this.currentPlayer === 'Player1';
    }
  }

  this.assignLoser = function(player) {
    return this.loser = player;
  }
}


var game = {
  tower:'',

  makeTower: function() {
    this.tower = new Tower();
  },

  firstPlayer: function() {
    var playa = Math.round(Math.random()); //source: StackOverflow - http://stackoverflow.com/questions/9730966/how-to-decide-between-two-numbers-randomly-using-javascript
    if (playa === 1) {
      window.alert('The player sitting on the left is going first!');
    } else {
      window.alert('The player sitting on the right is going first!'); //perhaps needs a timer
    }
  },

  start: function() {
    this.makeTower();
    this.firstPlayer();
    this.tower.startGame();
  },

  play: function(playedBlock) {
    var playerMove = this.tower.makePlay(playedBlock);
    return playerMove;
  },

  // over: function() {
  //   window.alert('Oh no!' + this.tower.assignLoser() + ' made the dynamite explode! GAME OVER');
  // }

}



    var $start = $('#start');
    var $reset = $('#reset');

  })
