const Park = function() {
  this.enclosure = []
};

Park.prototype.addDinosaurToEnclosure = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

module.exports = Park;
