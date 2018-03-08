function ePixelBuffer(width, height) {
    this.width  = width;
    this.height = height;

    this.oImageData = 'none';

    this.delta = 0;
};

ePixelBuffer.prototype.Update = function(delta) {
    this.delta = delta;
};

ePixelBuffer.prototype.Draw = function(oContext) {
    if(this.oImageData === 'none') {
        this.oImageData = oContext.createImageData(this.width, this.height);
    }
    
    this.GenTestImage(this.delta);

    oContext.putImageData(this.oImageData, 0, 0);
};

ePixelBuffer.prototype.PutPixel = function(i, r, g, b) {
    this.oImageData.data[i]     = r;
    this.oImageData.data[i + 1] = g;
    this.oImageData.data[i + 2] = b;
    this.oImageData.data[i + 3] = 255;
};

ePixelBuffer.prototype.GenTestImage = function(delta) {
    for(let x = 0; x < this.width; x++) {
        for(let y = 0; y < this.height; y++) {
            let pixIndex = (y * this.width + x) * 4;

            let red     = ((x + delta) % 256) ^ ((y + delta) % 256);
            let green   = ((2 * x + delta) % 256) ^ (2 * x + delta) % 256; 
            let blue    = 50 + Math.floor(Math.random() * 100);

            blue = (blue + delta) % 256;

            this.PutPixel(pixIndex, red, green, blue);
        }
    }
}