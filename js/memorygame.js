function MemoryGame(){
  this.cards = [];
}
MemoryGame.prototype.initialize = function(n) {
    this.cards = new Array(n);
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i] = new Card(i, false);
    }

    //Duplicate all items
    var temp = this.cards;
    this.cards.push(...temp);
    this.shuffle();
  }
;
 MemoryGame.prototype.getCard = function(cardId) {
    return this.cards[cardId];
 };

MemoryGame.prototype.getAllCards = function() {
    for (let i = 0; i < this.cards.length; i++) {
      return this.cards;
    }
};

 MemoryGame.prototype.shuffle= function() {
    for (let i = 0; i < this.cards.length; i++) {
      let r = Math.floor(Math.random() * this.cards.length);
      let temp = this.cards[i];
      this.cards[i] = this.cards[r];
      this.cards[r] = temp;
    }
  }
;
