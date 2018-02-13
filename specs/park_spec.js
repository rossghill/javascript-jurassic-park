const assert = require('assert');
const dinosaur = require('../dinosaur');
const park = require('../park');

describe('Park', function() {

let dinosaur;
let dinosaur2;
let dinosaur3;
let park;

  beforeEach(function() {
    dinosaur = new Dinosaur("Stegosaurus", 4);
    dinosaur2 = new Dinosaur("Pterodactyl", 1);
    dinosaur3 = new Dinosaur("T-Rex", 3);
    park = new Park();
  });

  // dinosaur should have a type
  // dinosaur should have a number of offspring per year
  // park enclosure should start empty
  // park should be able to add a dinosaur
  // park should be able to remove all dinosaurs of a particular type
  // park should get all the dinosaurs with an offspring count of more than 2

  it('park should start empty', function() {

  });
});
