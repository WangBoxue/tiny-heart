function collisionDetection() {
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) {
            var distance = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
            if (distance < 900) {
                fruit.dead(i);
                data.double = fruit.type[i] === 'blue' ? 2 : data.double;
                data.fruitNum += data.double;
                mom.eat(fruit.type[i]);
            }
        }
    }
}
function momBabyCollisionDetection() {
    var distance = calLength2(mom.x, mom.y, baby.x, baby.y);
    if (distance < 900) {
        baby.recover();
        mom.feed();
        data.reset();
    }
}
