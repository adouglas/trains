var BreadthFirst = function(config) {
  this.initialized = false;
  this.config = (config) ? config : {};
};

BreadthFirst.prototype.load = function(graph) {
  var self = this;
};

BreadthFirst.prototype.routeDistance = function(start,finish) {
  var self = this;
};

BreadthFirst.prototype.routeShortest = function(start,finish) {
  var self = this;
};

BreadthFirst.prototype.routeMaxSteps = function(start,finish,mode) {
  var self = this;
};

BreadthFirst.prototype.routeLeastSteps = function(start,finish,mode) {
  var self = this;
};


module.exports = BreadthFirst;
