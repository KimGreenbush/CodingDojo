using System;
using System.Collections.Generic;

namespace HungryNinja
{
    class Food
    {
        public string Name;
        public int Calories;
        // Foods can be Spicy and/or Sweet
        public bool IsSpicy;
        public bool IsSweet;
        // add a constructor that takes in all four parameters: Name, Calories, IsSpicy, IsSweet
        public Food(string name, int calories, bool spicy, bool sweet){
            Name = name;
            Calories = calories;
            IsSpicy = spicy;
            IsSweet = sweet;
        }
    }

    class Buffet
    {
        public List<Food> Menu;

        //constructor
        public Buffet()
        {
            Menu = new List<Food>()
        {
            new Food("Cheesecake", 10000, false, true),
            new Food("Spaghetti", 500, true, false),
            new Food("Bread", 200, false, true),
            new Food("Ramen", 400, true, false),
            new Food("Sushi", 50, true, true),
            new Food("Onigiri", 30, true, true),
            new Food("Unagidon", 700, false, true)
        };
        }

        public Food Serve()
        {
            Random rand = new Random();
            Food meal = Menu[rand.Next(Menu.Count)];
            return meal;
        }
    }

    class Ninja
    {
        private int calorieIntake;
        public List<Food> FoodHistory;

        // add a constructor
        public FoodLog()
        {
            calorieIntake = 0;
            FoodHistory = new List<Food>();
        }

        // add a public "getter" property called "IsFull"
        public bool IsFull
        {
            get {return (calorieIntake > 1200)}
        }

        // build out the Eat method
        public void Eat(Food item)
        {
            if (IsFull == false)
            {
                Food snack = Food Buffet.Serve();
                FoodHistory.Add(snack);
                Console.WriteLine(snack.Name + ": spicy? " + snack.IsSpicy + " sweet? " + snack.isSweet);
            }
            else
            {
                Console.WriteLine("Ninja in full and can't eat anymore.")
            }
        }
    }


    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Buffet();
            Ninja();
        }
    }
}
