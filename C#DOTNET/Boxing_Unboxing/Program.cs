using System;
using System.Collections.Generic;

namespace Boxing_Unboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object>  aBox= new List<object> ();
            aBox.Add(7);
            aBox.Add(28);
            aBox.Add(-1);
            aBox.Add(true);
            aBox.Add("chair");
            int total = 0;
            foreach(var item in aBox){
            Console.WriteLine(item);
                if (item is int){
                total += (int)item;
                }
            }
            Console.WriteLine(total);
        }
    }
}
