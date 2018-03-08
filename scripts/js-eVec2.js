function eVec2(x, y) {
    this.x = x;
    this.y = y;

    //TEST ONLY
    this.delta = 0;
};

eVec2.prototype.Update = function(delta) {
    this.delta = delta;
};
