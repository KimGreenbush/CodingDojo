class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
            console.log(target.name, " was attacked by ", this.name, "! Resilience is now ", target.res);
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card {
	constructor(name, cost, text, magnitude, stat) {
		super(name, cost);
		this.text = text;
        this.magnitude = magnitude;
        this.stat = stat;
	}

	play(target) {
        if (target instanceof Unit) {
            this.stat == "power" ? target.power += this.magnitude : target.res += this.magnitude;
            console.log("Resilience: ", target.res, "Power: ", target.power);
		} else {
			throw new Error("Target must be a unit!");
		}
	}
}

const Card1 = new Unit("Red Belt Ninja", 3, 3, 4);
const Card2 = new Unit("Black Belt Ninja", 4, 5, 4);
const Card3 = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", +3, "resilience");
const Card4 = new Effect("Unhandled Promise Rejection", 1, "Reduce targe's resilience by 2", -2, "resilience");
const Card5 = new Effect("Pair Programming", 3, "Increase target's power by 2", +2, "power");

console.log(Card1);
Card3.play(Card1);
console.log(Card1);
Card4.play(Card1);
console.log(Card1);
Card5.play(Card1);
console.log(Card2);
Card1.attack(Card2);
console.log(Card2);