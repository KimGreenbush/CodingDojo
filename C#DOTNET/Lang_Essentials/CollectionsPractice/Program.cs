using System;
using System.Collections.Generic;

namespace CollectionsPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] singleDigit = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            string[] people = { "Tim", "Martin", "Nikki", "Sara" };
            string[] trueFalse = new string[10] { "true", "false", "true", "false", "true", "false", "true", "false", "true", "false" };
            List<string> icecream = new List<string>();
            icecream.Add("vanilla");
            icecream.Add("cookie dough");
            icecream.Add("peach cobbler");
            icecream.Add("turtle tracks");
            icecream.Add("coffee");
            Console.WriteLine(icecream.Count);
            Console.WriteLine(icecream[2]);
            icecream.RemoveAt(2);
            Console.WriteLine(icecream.Count);
            Dictionary<string, string> myDict = new Dictionary<string, string>();
            Random rand = new Random();
            myDict.Add($"{people[0]}", $"{icecream[rand.Next(0, 4)]}");
            myDict.Add($"{people[1]}", $"{icecream[rand.Next(0, 4)]}");
            myDict.Add($"{people[2]}", $"{icecream[rand.Next(0, 4)]}");
            myDict.Add($"{people[3]}", $"{icecream[rand.Next(0, 4)]}");
            foreach (var item in myDict)
            {
                Console.WriteLine(item.Key + "-" + item.Value);
            }
        }
    }
}