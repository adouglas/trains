var assert = require("assert");
var SimpleWorld = require("../../src/models/simple-world.js");
var Town = require("../../src/models/town.js");

describe('SimpleWorld', function(){
  var _world;
  var _towns;
  beforeEach(function(){
    _towns = [];
    _towns.push(new Town("stub1"));
    _towns.push(new Town("stub2"));
    _world = new SimpleWorld(_towns);
  });

  describe('#SimpleWorld(towns)', function(){
    it('should initialise a SimpleWorld object', function(){
      // Rather trivial test but ok for now
      assert.ok(_world instanceof SimpleWorld);
    });
  });
  describe('#SimpleWorld()', function(){
    it('should initialise a SimpleWorld object with a blank set of towns', function(){
      var w = new SimpleWorld();
      assert.ok(w instanceof SimpleWorld);
      assert.equal(0,w.getTowns().length);
    });
  });

  describe('#getTowns()', function(){
    it('should return an Array of towns where a SimpleWorld has been created with the towns "' + JSON.stringify(_towns) + '"', function(){
      assert.equal(2,_world.getTowns().length);
      assert.equal(_towns,_world.getTowns());
    });
  });
  describe('#getTown(name)', function(){
    it('should return an Object representing a town with the name "stub1"', function(){
      assert.equal("stub1",_world.getTown("stub1").getName());
    });
  });
  describe('#addTown()', function(){
    it('should return "' + JSON.stringify(_towns) + '" plus "{name:"stub3"}" where the latter stub town has been added', function(){
      var t = {name:"stub3"};
      _world.addTown(t);
      assert.equal(3,_world.getTowns().length);
      _towns.push(t);
      assert.equal(_towns,_world.getTowns());
    });
  });
});
