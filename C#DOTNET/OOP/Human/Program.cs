using System;

namespace Human
{
    class Human
    {
        // Fields for Human
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        private int health;

        // add a public "getter" property to access health
        public int Health
        {
            get { return health; }
        }

        // Add a constructor that takes a value to set Name, and set the remaining fields to default values
        public Human(string name){
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }


        // Add a constructor to assign custom values to all fields
        public Human(string name, int strength, int intelligence, int dexterity, int healthspan){
            Name = name;
            Strength = strength;
            Intelligence = intelligence;
            Dexterity = dexterity;
            health = healthspan;
        }

        // Build Attack method
        public int Attack(Human target)
        {
            int damage = 5 * Strength;
            return target.Health - damage;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Human kim = new Human("Kim");
            Console.WriteLine(kim);
        }
    }
}
