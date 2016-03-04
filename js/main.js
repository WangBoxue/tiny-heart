document.body.onload = game;

var canvas1, canvas2;
var ctx1, ctx2;
var lastTime, deltaTime;
var backgroundImage = new Image();
var width, height;
var ane;
var fruit;
var mom;
var baby;
var data;

var mouseX, mouseY;

function game() {
    init();
    gameloop();
}
function init() {
    canvas1 = document.getElementById("canvas1");
    ctx1 = canvas1.getContext('2d');
    canvas2 = document.getElementById("canvas2");
    ctx2 = canvas2.getContext('2d');

    canvas2.addEventListener('mousemove', onMouseMove, false);
    backgroundImage.src = './src/background.jpg';

    width = canvas1.width;
    height = canvas1.height;

    mouseX = width * 0.5;
    mouseY = height * 0.5;

    lastTime = Date.now();
    deltaTime = 0;
    ane = new Ane();
    ane.init();

    fruit = new Fruit();
    fruit.init();

    mom = new Mom();
    mom.init();

    baby = new Baby();
    baby.init();

    data = new Data();
}
function gameloop() {
    var now = Date.now();
    deltaTime = now - lastTime;
    if (deltaTime > 1000 / 60) {
        deltaTime = 1000 / 60;
    }
    lastTime = now;
    drawBackground();
    ane.draw();
    fruit.draw();

    ctx2.clearRect(0, 0, width, height);
    baby.draw();
    mom.draw();

    collisionDetection();
    momBabyCollisionDetection();

    data.draw();
    window.requestAnimFrame(gameloop);
}
function onMouseMove(e) {
    if (e.offSetX || e.layerX) {
        mouseX = e.offSetX || e.layerX;
        mouseY = e.offSetY || e.layerY;
    }
}
