using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Program
    {
        public static int[] RandomArray(){
            int[] array = new int[10];
            int max = array[0];
            int min = array[0];
            int sum = 0;
            Random rand = new Random();
            for (int i = 0; i < array.Length; i++){
                array[i] = rand.Next(5, 26);
                if (array[i] > max){
                    max = array[i];
                }

                if (array[i] < min){
                    min = array[i];
                }
                sum += array[i];
            }
            Console.WriteLine(max);
            Console.WriteLine(min);
            Console.WriteLine(sum);
            return array;
        }

        public static string TossCoin(){
            Console.WriteLine("Tossing a Coin!");
            Random rand = new Random();
            int coin = rand.Next(2);
            if (coin == 1){
                string tails = "Tails";
                Console.WriteLine(tails);
                return tails;
            }
            else{
                string heads = "Heads";
                Console.WriteLine(heads);
                return heads;
            }
        }

        public static double TossMultipleCoins(int num){
            short i = 1;
            int heads = 0;
            while (i <= num){
                string result = TossCoin();
                if (result == "Heads"){
                    heads++;
                }
                i++;
            }
            double ratio = (double)heads / (double)num;
            return ratio;
        }

        public static List<string> Names(){
            List<string> names = new List<string>(){"Todd", "Tiffany", "Charlie", "Geneva", "Sydney"};
            Random rand = new Random();
            List<string> longNames = new List<string>();
            for (int i = 0; i < names.Count; i++){
                int temp = rand.Next(i, names.Count);
                string value = names[temp];
                names[temp] = names[i];
                names[i] = value;
                if (names[i].Length > 5){
                    longNames.Add(names[i]);
                }
            }
            Console.WriteLine(names);
            return longNames;
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            int num = 3;
            RandomArray();
            TossCoin();
            double headRatio = TossMultipleCoins(num);
            Names();
        }
    }
}
