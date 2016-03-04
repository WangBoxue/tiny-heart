var Data = function () {
    this.fruitNum = 0;
    this.double = 1;
};
Data.prototype.reset = function () {
    this.fruitNum = 0;
    this.double = 1;
};
Data.prototype.draw = function () {
    ctx2.fillStyle = 'white';
    ctx2.fillText(this.fruitNum, width * 0.5, height - 50);
    ctx2.fillText(this.double, width * 0.5, height - 25);
};
