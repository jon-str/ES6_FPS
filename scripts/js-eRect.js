function eRect(x1, y1, x2, y2, sColor) {
    this.x1 = x1;
    this.x2 = x2
    this.y1 = y1;
    this.y2 = y2;

    this.sColor = sColor;

    this.delta = 0;
};

eRect.prototype.Update = function(delta) {
    this.delta = delta;
};

eRect.prototype.Draw = function(oContext) {
    oContext.fillStyle = this.sColor;
    oContext.fillRect(this.x1, this.y1, this.x2, this.y2);
};