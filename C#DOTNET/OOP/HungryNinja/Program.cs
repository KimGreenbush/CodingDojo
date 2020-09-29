using System;
using System.Collections.Generic;

namespace HungryNinja
{
    class Food
    {
        public string Name;
        public int Calories;
        public bool IsSpicy;
        public bool IsSweet;
        public Food(string name, int calories, bool spicy, bool sweet)
        {
            Name = name;
            Calories = calories;
            IsSpicy = spicy;
            IsSweet = sweet;
        }
    }

    class Buffet
    {
        public List<Food> Menu;

        public Buffet()
        {
            Menu = new List<Food>()
        {
            new Food("Cheesecake", 800, false, true),
            new Food("Spaghetti", 500, true, false),
            new Food("Bread", 200, false, true),
            new Food("Ramen", 300, true, false),
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

        public Ninja()
        {
            calorieIntake = 0;
            FoodHistory = new List<Food>();
        }

        public bool IsFull
        {
            get { return (calorieIntake > 1200); }
        }

        public void Eat(Food item)
        {
            if (!IsFull)
            {
                calorieIntake += item.Calories;
                FoodHistory.Add(item);
                Console.WriteLine(item.Name + ", spicy:" + item.IsSpicy + ", sweet: " + item.IsSweet);
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Buffet buffet = new Buffet();
            Ninja ninja = new Ninja();
            while (!ninja.IsFull)
            {
                ninja.Eat(buffet.Serve());
            }
            Console.WriteLine("Mr. Ninja is full and cannot eat anymore.");
        }
    }
}