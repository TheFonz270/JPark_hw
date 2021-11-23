const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let jPark;
  beforeEach(function () {
    jPark = new Park('J Park', 50);
    
    ben = new Dinosaur ('T-Rex', 'Carnivore', 13000)
    jerry = new Dinosaur ('T-Rex', 'Carnivore', 10000)

    dean = new Dinosaur ('Velociraptor', 'Carnivore', 8000)
    seth = new Dinosaur ('Velociraptor', 'Carnivore', 7500)
    roman = new Dinosaur ('Velociraptor', 'Carnivore', 7500)

    jPark.addDinos(dean);
    jPark.addDinos(seth);
    jPark.addDinos(roman);
  })

  it('should have a name', function () {
    actual = jPark.name
    assert.strictEqual(actual, 'J Park')
  });

  it('should have a ticket price', function () {
    actual = jPark.ticketPrice
    assert.strictEqual(actual, 50)
  });

  it('should have a collection of dinosaurs', function () {
    actual = jPark.dinos;
    assert.deepStrictEqual(actual, [dean, seth, roman]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    jPark.addDinos(ben);
    actual = jPark.dinos;
    assert.deepStrictEqual(actual, [dean, seth, roman, ben]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    jPark.removeDino(roman);
    actual = jPark.dinos;
    assert.deepStrictEqual(actual, [dean, seth])
    

  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    assert.deepStrictEqual(jPark.findCelebDino(), dean);
  });
 

  it('should be able to find all dinosaurs of a particular species', function(){
    actual = jPark.findSpecies("Velociraptor");
    assert.deepStrictEqual(actual, [dean, seth, roman]);

  });

  it('should be able to calculate the total number of visitors per day', function() {
    actual = jPark.totalVisitorsPerDay();
    assert.strictEqual(actual, 23000)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    actual = jPark.totalVisitorsPerYear();
    assert.strictEqual(actual, 8395000)
  });

  it('should be able to calculate total revenue for one year');

});
