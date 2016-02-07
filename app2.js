$(function () {
  console.log('linked');

var $container = $('.game-container');
var $player = $('.players')
var $start = $('#start');
var $reset = $('#reset');
var $instructions = $('.instructions')
var $play = $('.start')


function Block() {

  this.shown = true;
  this.dynoCarrier = false;

  this.hide = function() {
    if (this.shown) {
      return this.shown = false;
    } else {
      return;
    };
  };
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
        this.indexOfDyno = Math.floor(Math.random()*this.towerArray.length); //source: StackOverflow - http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
        while (this.towerArray[this.indexOfDyno].shown === false) {
              this.indexOfDyno = Math.floor(Math.random()*this.towerArray.length);
          };
          this.dyno = this.towerArray[this.indexOfDyno];
          this.dyno.dynoCarrier = true;
        };


  this.thoseBlocksTho = function () {
    $('.blocks').each(function (i) {
        $('.blocks').eq(i).on('click', function(e) {
            var x = $(e.target).attr('id');
            if (that.towerArray[x].shown === true) {
            that.makePlay(x);
            };
          });
        });
      };


  this.makePlay = function(x) {
    var playedBlock = this.towerArray[x];
    if (playedBlock.dynoCarrier === false) {
      playedBlock.hide();
      $('#' + x).css('background', 'none');
      $('#' + that.indexOfDyno).fadeOut(400).fadeIn(400);
      setTimeout(function () {
      that.nextTurn();
      }, 500);

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
  };



  this.assignLoser = function(player) {
    $('#' + that.indexOfDyno).css('background','#DD2C00');
    // $('#' + that.indexOfDyno).append($('<img>', {id: dynamiteImg, src:'../images/dynamite.png'}))
    $('body').jGravity({
      target: '.blocks',
      weight: 10,
      depth: 10,
      drag: false
    });

    $player.text(player + ' clicked the dynamite! GAME OVER');
  }
}


var game = {
  // tower:'',

  makeTower: function() {
    this.tower = new Tower();
  },

  firstPlayer: function() {
    var playa = Math.round(Math.random()); //source: StackOverflow - http://stackoverflow.com/questions/9730966/how-to-decide-between-two-numbers-randomly-using-javascript
    if (playa === 1) {
      $player.text('The player sitting on the left is going first!');
    } else {
      $player.text('The player sitting on the right is going first!');
    }
  },

  start: function() {
    this.makeTower();
    this.firstPlayer();
    this.tower.startGame();
  },
}


$start.on('click', function() {
  $('.blocks').remove();
  $instructions.hide();
  $player.empty();
  $play.hide();
  game.start();
})

$reset.on('click', function() {
  $('.blocks').remove();
  $player.empty();
  $play.show();
  $instructions.show();
})


})
