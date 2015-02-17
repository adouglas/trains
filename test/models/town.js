var assert = require("assert");
var Town = require("../../src/models/town.js");

describe('Town', function(){
  var _town;
  var _connections = [{name:"stub1"},{name:"stub2"}];
  beforeEach(function(){
    _town = new Town("A",_connections);
  });

  describe('#Town(name,connections)', function(){
    it('should initialise a Town object', function(){
      // Rather trivial test but ok for now
      assert.ok(_town instanceof Town);
    });
  });
  describe('#Town(name)', function(){
    it('should initialise a Town object with a blank set of connections', function(){
      var t = new Town("B");
      assert.ok(t instanceof Town);
      assert.equal(0,t.getConnections().length);
    });
  });

  describe('#getName()', function(){
    it('should return "A" where the Town has been created with the name "A"', function(){
      assert.equal("A",_town.getName());
    });
  });
  describe('#getConnections()', function(){
    it('should return an Array of connections where a Town has been created with the connections "' + JSON.stringify(_connections) + '"', function(){
      assert.equal(2,_town.getConnections().length);
      assert.equal(_connections,_town.getConnections());
    });
  });
  describe('#addConnection()', function(){
    it('should return "' + JSON.stringify(_connections) + '" plus "{name:"stub3"}" where the latter has been added', function(){
      var c = {name:"stub3"};
      _town.addConnection(c);
      assert.equal(3,_town.getConnections().length);
      _connections.push(c);
      assert.equal(_connections,_town.getConnections());
    });
  });
});
