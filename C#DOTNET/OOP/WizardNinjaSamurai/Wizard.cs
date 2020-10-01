using System;

namespace Human
{
    class Wizard : Human
    {
        public Wizard(string name) : base(name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 25;
            Dexterity = 3;
            health = 50;
        }

        public override int Attack(Human target)
        {
            int damage = 5 * Intelligence;
            target.health -= damage;
            this.health += damage;
            Console.WriteLine($"{this.Name} attacked {target.Name} for {damage} damage!");
            return target.health;
        }

        public void Heal(Human target)
        {
            target.health += 10 * Intelligence;
            Console.WriteLine($"{target.Name} healed!");
        }
    }
}