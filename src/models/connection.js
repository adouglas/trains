function Connection(from,to,distance) {
    this._from = from;
    this._to = to;
    this._distance = distance;
}

var method = Connection.prototype;

method.getFrom = function() {
    return this._from;
};
method.getTo = function() {
    return this._to;
};
method.getDistance = function() {
    return this._distance;
};

module.exports = Connection;
