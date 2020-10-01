using System;

namespace Human
{
    class Ninja : Human
    {
        public Ninja(string name) : base(name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 175;
            health = 100;
        }

        public override int Attack(Human target)
        {
            int damage = 5 * Dexterity;
            target.health -= damage;
            Random rand = new Random();
            if (rand.Next(10) <= 2)
            {
                target.health -= 10;
            }
            Console.WriteLine($"{this.Name} attacked {target.Name} for {damage} damage!");
            return target.health;
        }

        public int Steal(Human target)
        {
            target.health -= 5;
            this.health += 5;
            Console.WriteLine($"{this.Name} stole 5 HP from {target.Name}!");
            return target.health;
        }
    }
}