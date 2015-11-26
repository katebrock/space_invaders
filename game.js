;(function() {
  var Game = function(canvasId) {
    var canvas = document.getElementById(canvasId)
    var screen = canvas.getContext('2d');
    var gameSize = { x: canvas.width, y: canvas.height};
    console.log("hi")

    this.bodies = [new Player(this, gameSize)];

    var self = this;
    var tick = function() {
      self.update();
      self.draw(screen, gameSize);
      requestAnimationFrame(tick);
    };
    tick();
  };

  Game.prototype = {
    update: function() {
      console.log("yoyo")
    },
    draw: function(screen, gameSize) {
      for (var i = 0;)
    }
  };

  var Player = function(game, gameSize) {
    this.game = game;
    this.size = { x: 15, y: 15 };
    this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.x };
  };

  Player.prototype = {
    update: function() {

    }
  };

  window.onload = function() {
    new Game("screen");
  };

})();
