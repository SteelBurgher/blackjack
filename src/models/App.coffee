# TODO: Refactor this model to use an internal Game Model instead
# of containing the game logic directly.
class window.App extends Backbone.Model
  initialize: ->
    @set 'deck', deck = new Deck()
    @set 'playerHand', deck.dealPlayer()
    (@get 'playerHand').on 'add', () =>
      gameOver = true if (@get 'playerHand').scores() > 21 
      alert("gameOver")  if gameOver
    @set 'dealerHand', deck.dealDealer()


