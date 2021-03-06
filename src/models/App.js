// Generated by CoffeeScript 1.9.1
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

window.App = (function(superClass) {
  extend(App, superClass);

  function App() {
    return App.__super__.constructor.apply(this, arguments);
  }

  App.prototype.initialize = function() {
    var deck;
    this.set('deck', deck = new Deck());
    this.set('playerHand', deck.dealPlayer());
    (this.get('playerHand')).on('add', (function(_this) {
      return function() {
        var gameOver;
        if ((_this.get('playerHand')).scores() > 21) {
          gameOver = true;
        }
        return gameOver;
      };
    })(this));
    return this.set('dealerHand', deck.dealDealer());
  };

  return App;

})(Backbone.Model);
