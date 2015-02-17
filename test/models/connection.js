var assert = require("assert");
var Connection = require("../../src/models/connection.js");

describe('Connection', function(){
  var _connection;
  beforeEach(function(){
    var from = {name:"A"};
    var to = {name:"B"};
    _connection = new Connection(from,to,12);
  });

  describe('#Connection(from,to,distance)', function(){
    it('should initialise a Connection object', function(){
      // Rather trivial test but ok for now
      assert.ok(_connection instanceof Connection);
    });
  });
  describe('#getFrom()', function(){
    it('should return a Object "A" where the Connection has been created coming from Object "A"', function(){
      assert.equal("A",_connection.getFrom().name);
    });
  });
  describe('#getTo()', function(){
    it('should return an Object "B" where the Connection has been created going to Object "B"', function(){
      assert.equal("B",_connection.getTo().name);
    });
  });
  describe('#getDistance()', function(){
    it('should return "12" for the distance where a Connection has been created with the distance "12"', function(){
      assert.equal(12,_connection.getDistance());
    });
  });
});
