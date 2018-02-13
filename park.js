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
  return this.enclosure;
}

Park.prototype.dinosWithOffspringMoreThanTwo = function() {
const returned_dinos = []
  for(dino of this.enclosure) {
    if (dino.no_of_offspring > 2) {
      returned_dinos.push(dino.type);
    }
  }
  return returned_dinos;
}

module.exports = Park;
