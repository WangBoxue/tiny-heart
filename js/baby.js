var Baby = function () {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.babyEye = new Image();
    this.babyBody = new Image();
    this.babyTail = new Image();
    this.tails = [];
    this.tailTimer = 0;
    this.currentTailCount = 0;

    this.eyes = [];
    this.eyeTimer = 0;
    this.currentEyeCount = 0;
    this.eyeInterval = 1000;

    this.bodys = [];
    this.bodyTimer = 0;
    this.currentBodyCount = 0;
};
Baby.prototype.init = function () {
    this.x = width * 0.5 + 50;
    this.y = height * 0.5;
    var i = 0;
    for (i = 0; i < 8; i++) {
        this.tails[i] = new Image();
        this.tails[i].src = './src/babyTail' + i + '.png';
    }
    this.babyTail = this.tails[0];

    for (i = 0; i < 2; i++) {
        this.eyes[i] = new Image();
        this.eyes[i].src = './src/babyEye' + i + '.png';
    }
    this.babyEye = this.eyes[0];

    for (i = 0; i < 20; i++) {
        this.bodys[i] = new Image();
        this.bodys[i].src = './src/babyFade' + i + '.png';
    }
    this.babyBody = this.bodys[0];
};
Baby.prototype.draw = function () {
    this.x = lerpDistance(mom.x, this.x, 0.98);
    this.y = lerpDistance(mom.y, this.y, 0.98);

    var deltaX = mom.x - this.x;
    var deltaY = mom.y - this.y;
    var deltaAngle = Math.atan2(deltaY, deltaX) + Math.PI;
    this.angle = lerpAngle(deltaAngle, this.angle, 0.6);

    this.tailTimer += deltaTime;
    if (this.tailTimer > 50) {
        this.currentTailCount = (this.currentTailCount + 1) % 8;
        this.tailTimer = 0;
        this.babyTail = this.tails[this.currentTailCount];
    }

    this.eyeTimer += deltaTime;
    if (this.eyeTimer > this.eyeInterval) {
        this.currentEyeCount = (this.currentEyeCount + 1) % 2;
        this.eyeTimer = 0;
        this.babyEye = this.eyes[this.currentEyeCount];
        if (this.currentEyeCount === 0) {
            this.eyeInterval = Math.random() * 1500 + 2000;
        } else {
            this.eyeInterval = 100;
        }
    }

    this.bodyTimer += deltaTime;
    if (this.bodyTimer > 200) {
        this.currentBodyCount = this.currentBodyCount + 1;
        if (this.currentBodyCount >  19) {
            this.currentBodyCount = 19;
        }
        this.bodyTimer = 0;
        this.babyBody = this.bodys[this.currentBodyCount];
    }

    ctx2.save();
    ctx2.translate(this.x, this.y);
    ctx2.rotate(this.angle);
    ctx2.drawImage(this.babyTail, -this.babyTail.width * 0.5 + this.babyBody.width * 0.5, -this.babyTail.height * 0.5);
    ctx2.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
    ctx2.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5);
    ctx2.restore();
};
Baby.prototype.recover = function () {
    this.currentBodyCount = 0;
};
