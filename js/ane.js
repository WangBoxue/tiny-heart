var Ane = function () {
    this.x = [];
    this.len = [];
};
Ane.prototype.num = 50;
Ane.prototype.draw = function() {
    ctx1.save();
    ctx1.globalAlpha = 0.5;
    ctx1.strokeStyle = '#3b154e';
    ctx1.lineWidth = 20;
    ctx1.lineCap = 'round';
    for (var i = 0; i < this.num; i++) {
        ctx1.beginPath();
        ctx1.moveTo(this.x[i], height);
        ctx1.lineTo(this.x[i], height - this.len[i]);
        ctx1.stroke();
    }
    ctx1.restore();
};
Ane.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.x[i] = i * 16 + Math.random() * 20;
        this.len[i] = 200 + Math.random() * 50;
    }
};
