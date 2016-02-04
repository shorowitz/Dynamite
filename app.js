$(function () {
  console.log('linked');

var $container = $('.game-container');
var $player = $('.players')
var $start = $('#start');
var $reset = $('#reset');


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
  var that = this;
  this.towerArray = [];
  this.currentPlayer = 'Player 1';
  this.dyno = {};
  this.indexOfDyno = 0;


  this.startGame = function() {
    for (var i =0; i < 18; i++) {
      var block = new Block();
      this.towerArray.push(block);

      var $blocks = $('<div>');
      $blocks.addClass('blocks').attr('id', i);
      $container.append($blocks);
    };

    this.assignDynamite();
    this.thoseBlocksTho();
  }

  this.assignDynamite = function() {
    this.indexOfDyno = Math.floor(Math.random()*this.towerArray.length);
    this.dyno = this.towerArray[this.indexOfDyno]; //source: StackOverflow - http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
    this.dyno.dynoCarrier = true;
  };

  this.thoseBlocksTho = function () {
    $('.blocks').each(function (i) {                   //source: DOUG!
        $('.blocks').eq(i).on('click', function(e) {
            var x = $(e.target).attr('id');
            that.makePlay(x);
            });
          });
        };


  this.makePlay = function(x) {
    var playedBlock = this.towerArray[x];
    if (playedBlock.dynoCarrier === false) {
      playedBlock.hide();
      $('#' + x).css('border', 'none');
      // $('.blocks').eq(this.indexOfDyno).attr("background-color", "red");
      // setTimeout(that.nextTurn, 2000);
      this.nextTurn();

    } else if (playedBlock.dynoCarrier === true) {
        this.assignLoser(this.currentPlayer);
    };
  };

  this.nextTurn = function() {
    this.dyno.dynoCarrier = false;
    if (this.currentPlayer === 'Player 1') {
      this.currentPlayer = 'Player 2';
      $player.text('Player 2 is up!');
    } else if (this.currentPlayer === 'Player 2') {
        this.currentPlayer = 'Player 1';
        $player.text('Player 1 is up!');
    };
    this.assignDynamite();
    this.thoseBlocksTho();
  };

  this.assignLoser = function(player) {
    $('.blocks').remove();
    $player.text(player + ' lit the dynamite! GAME OVER');
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
      $('.players').text('The player sitting on the left is going first!');
    } else {
      $('.players').text('The player sitting on the right is going first!'); //perhaps needs a timer
    }
  },

  start: function() {
    this.makeTower();
    this.firstPlayer();
    this.tower.startGame();
  },
}

$start.on('click', function() {
  game.start();
})

$reset.on('click', function() {
  $player.empty();
})


})
