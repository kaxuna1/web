Position = {
    high: 'h',
    low: 'l'
};

Warrior = function (name) {
    this.name = name;
    this.health = 100;
};

Warrior.prototype = {
    attack: function (enemy, position) {
        if (enemy.block != position) {
            var damage = position == Position.high ? 10 : 5;
            // if enemy is not blocking at all then give more damage
            if (!enemy.block) {
                damage += 5;
            }
            enemy.setHealth(enemy.health - damage);
        }
    },
    setHealth: function (value) {
        this.health = Math.max(0, value);
        if (this.health === 0) {
            this.deceased = true;
            this.zombie = false;
        } else if (this.deceased) {
            this.zombie = true;
        }
    }
};

var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

ninja.block = Position.high;
samurai.attack(ninja, Position.low);
// ninja.health should == 95
// private functions