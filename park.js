const Park = function() {
  this.enclosure = []
};

Park.prototype.addDinosaurToEnclosure = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeOfType = function(type) {
  for(dino of this.enclosure) {
    if (dino.type === type) {
      this.enclosure.pop(dino);
    }
  }
}

module.exports = Park;
