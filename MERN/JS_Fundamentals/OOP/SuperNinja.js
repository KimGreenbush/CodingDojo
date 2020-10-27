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
		console.log("Name: ", this.name, "Health: ", this.health, "Strength: ", this.strength, "Speed: ", this.speed);
	}

	drinkSake() {
		this.health += 10;
	}
}

class Sensei extends Ninja{
    constructor(name) {
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months");
    }

    showStats() {
        super.showStats();
    }
}

const Shinobi = new Ninja("Naruto", 50);
Shinobi.showStats();
Shinobi.drinkSake();
Shinobi.showStats();

const Teacher = new Sensei("Master Splinter");
Teacher.showStats();
Teacher.speakWisdom();
Teacher.showStats();