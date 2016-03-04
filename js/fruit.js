var Fruit = function () {
    this.alive = [];
    this.x = [];
    this.y = [];
    this.l = [];
    this.speed = [];
    this.type = [];
    this.orange = new Image();
    this.blue = new Image();
};
Fruit.prototype.num = 30;
Fruit.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
    }
    this.orange.src = './src/fruit.png';
    this.blue.src = './src/blue.png';
};
Fruit.prototype.draw = function () {
    this.check();
    for (var i = 0; i < this.num; i++) {
        if (!this.alive[i]) {
            continue;
        }
        if (this.l[i] <= 15) {
            this.l[i] += this.speed[i] * deltaTime;
        } else {
            this.y[i] -= this.speed[i] * 7 * deltaTime;
        }
        ctx1.drawImage(this.type[i] === 'orange' ? this.orange : this.blue, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
        if (this.y[i] < 0 ) {
            this.alive[i] = false;
        }
    }
};
Fruit.prototype.born = function (i) {
    var aneId = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.x[aneId];
    this.y[i] = height - ane.len[aneId];
    this.l[i] = 0;
    this.alive[i] = true;
    this.speed[i] = Math.random() * 0.01 + 0.005;
    this.type[i] = Math.random() > 0.2 ? 'orange' : 'blue';
};
Fruit.prototype.dead = function (i) {
    this.alive[i] = false;
};
Fruit.prototype.check = function() {
    var aliveNum = this.alive.filter(e => e).length;
    if (aliveNum < 15) {
        this.born(this.alive.indexOf(false));
    }
};
