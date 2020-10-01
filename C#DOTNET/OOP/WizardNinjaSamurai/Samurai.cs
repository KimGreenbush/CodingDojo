using System;

namespace Human
{
    class Samurai : Human
    {
        public Samurai(string name) : base(name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 200;
        }

        public override int Attack(Human target)
        {
            base.Attack(target);
            if (target.health < 50)
            {
                target.health = 0;
            }
            return target.health;
        }

        public void Meditate()
        {
            this.health = 200;
            Console.WriteLine($"{this.Name} restored to full health!");
        }
    }
}