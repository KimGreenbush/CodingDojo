using System;

namespace Human
{
    class Human
    {
        // Fields for Human
        public string Name;
        protected int Strength;
        protected int Intelligence;
        protected int Dexterity;
        public int health;

        public int Health
        {
            get { return health; }
        }

        public Human(string name){
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }

        public virtual int Attack(Human target)
        {
            int damage = 5 * Strength;
            target.health -= damage;
            Console.WriteLine($"{this.Name} attacked {target.Name} for {damage} damage!");
            return target.health;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Wizard wizard = new Wizard("Harry");
            Ninja ninja = new Ninja("Naruto");
            Samurai samurai = new Samurai("Jack");

            Console.WriteLine($"Yer a Wizard, {wizard.Name}!");
            Console.WriteLine($"{ninja.Name} is Ninja who wants to be Hokage.");
            Console.WriteLine($"Samurai {samurai.Name} must defeat the evil Aku!");

            Console.WriteLine(wizard.Health);
            Console.WriteLine(ninja.Health);
            Console.WriteLine(samurai.Health);

            wizard.Attack(ninja);
            ninja.Attack(samurai);
            samurai.Attack(wizard);

            wizard.Heal(wizard);
            ninja.Steal(samurai);
            samurai.Meditate();

            Console.WriteLine(wizard.Health);
            Console.WriteLine(ninja.Health);
            Console.WriteLine(samurai.Health);
        }
    }
}
