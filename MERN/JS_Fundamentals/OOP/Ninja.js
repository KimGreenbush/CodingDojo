class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.strength = 3;
        this.speed = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this.name, this.health, this.strength, this.speed);
    }

    drinkSake() {
        this.health += 10;
    }
}