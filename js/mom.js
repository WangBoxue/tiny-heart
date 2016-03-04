var Mom = function () {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
    this.tails = [];
    this.tailTimer = 0;
    this.currentTailCount = 0;

    this.eyes = [];
    this.eyeTimer = 0;
    this.currentEyeCount = 0;
    this.eyeInterval = 1000;

    this.orangeBodys = [];
    this.blueBodys = [];
    this.currentBodyCount = 0;
};
Mom.prototype.init = function () {
    this.x = width * 0.5;
    this.y = height * 0.5;
    this.angle = 0;
    for (var i = 0; i < 8; i++) {
        this.tails[i] = new Image();
        this.tails[i].src = './src/bigTail' + i + '.png';
    }
    this.bigTail = this.tails[0];

    for (i = 0; i < 2; i++) {
        this.eyes[i] = new Image();
        this.eyes[i].src = './src/bigEye' + i + '.png';
    }
    this.bigEye = this.eyes[0];

    for (i = 0; i < 8; i++) {
        this.orangeBodys[i] = new Image();
        this.orangeBodys[i].src = './src/bigSwim' + i + '.png';
        this.blueBodys[i] = new Image();
        this.blueBodys[i].src = './src/bigSwimBlue' + i + '.png';
    }
    this.bigBody = this.orangeBodys[0];
};
Mom.prototype.draw = function () {
    this.x = lerpDistance(mouseX, this.x, 0.94);
    this.y = lerpDistance(mouseY, this.y, 0.94);

    var deltaX = mouseX - this.x;
    var deltaY = mouseY - this.y;
    var deltaAngle = Math.atan2(deltaY, deltaX) + Math.PI;
    this.angle = lerpAngle(deltaAngle, this.angle, 0.6);

    this.tailTimer += deltaTime;
    if (this.tailTimer > 50) {
        this.currentTailCount = (this.currentTailCount + 1) % 8;
        this.tailTimer = 0;
        this.bigTail = this.tails[this.currentTailCount];
    }

    this.eyeTimer += deltaTime;
    if (this.eyeTimer > this.eyeInterval) {
        this.currentEyeCount = (this.currentEyeCount + 1) % 2;
        this.eyeTimer = 0;
        this.bigEye = this.eyes[this.currentEyeCount];
        if (this.currentEyeCount === 0) {
            this.eyeInterval = Math.random() * 1500 + 2000;
        } else {
            this.eyeInterval = 100;
        }
    }

    ctx2.save();
    ctx2.translate(this.x, this.y);
    ctx2.rotate(this.angle);
    ctx2.drawImage(this.bigTail, -this.bigTail.width * 0.5 + this.bigBody.width * 0.5, -this.bigTail.height * 0.5);
    ctx2.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
    ctx2.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5);
    ctx2.restore();
};
Mom.prototype.eat = function (fruitType) {
    this.currentBodyCount++;
    if (this.currentBodyCount > 7) {
        this.currentBodyCount = 7;
    }
    this.bigBody = fruitType === 'orange' ? this.orangeBodys[this.currentBodyCount] : this.blueBodys[this.currentBodyCount];
};
Mom.prototype.feed = function () {
    this.currentBodyCount = 0;
    this.bigBody = this.orangeBodys[0];
};
