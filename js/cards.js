var Card = function(i, reveal) {
  this.id = i;
  this.revealed = reveal;
  var self = this;
  return {
    get getId() {
      return self.id;
    },

    set setId(id) {
      self.id = id;
    },

    get isRevealed() {
      return self.revealed;
    },

    set setReveal(bool) {
      self.revealed = bool;
    }
  };
};
