function Town(name,connections) {
    this._name = name;
    if(connections === undefined){
      connections = [];
    }
    this._connections = connections;
}

var method = Town.prototype;

method.getName = function() {
    return this._name;
};
method.getConnections = function() {
    return this._connections;
};

method.addConnection = function(connection) {
    return this._connections.push(connection);
};

module.exports = Town;
