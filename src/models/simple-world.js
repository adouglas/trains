function SimpleWorld(towns) {
    if(towns === undefined){
      towns = [];
    }
    this._towns = towns;
}

var method = SimpleWorld.prototype;

method.getTowns = function() {
    return this._towns;
};
method.getTown = function(name) {
    for(var i = this._towns.length - 1; i >= 0; i--){
      if(this._towns[i].getName() === name){
        return this._towns[i];
      }
    }
    return null;
};

method.addTown = function(town) {
    return this._towns.push(town);
};

module.exports = SimpleWorld;
