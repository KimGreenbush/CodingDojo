using System;
using System.Collections.Generic;

namespace Basic13
{
    class Program
    {
        public static void PrintNumbers(){
            // Print all of the integers from 1 to 255.
            short i = 1;
            while (i <= 255)
            {
                Console.WriteLine(i);
                i++;
            }
        }

        public static void PrintOdds(){
            // Print all of the odd integers from 1 to 255.
            short i = 1;
            while (i <= 255){
                if (i % 2 != 0){
                    Console.WriteLine(i);
                }
                i++;
            }
        }

        public static void PrintSum(){
            // Print all of the numbers from 0 to 255,
            // but this time, also print the sum as you go.
            // For example, your output should be something like this:
            // New number: 0 Sum: 0
            // New number: 1 Sum: 1
            // New Number: 2 Sum: 3
            short i = 0;
            short total = 0;
            while (i <= 255) {
                Console.WriteLine($"num: {i}");
                Console.WriteLine($"total:  {total += i}");
                i++;
            }
        }

        public static void LoopArray(int[] numbers){
            // Write a function that would iterate through each item of the given integer array and
            // print each value to the console.
            short i = 0;
            while (i < numbers.Length){
                Console.WriteLine(numbers[i]);
                i++;
            }
        }

        public static int FindMax(int[] numbers){
            // Write a function that takes an integer array and prints and returns the maximum value in the array.
            // Your program should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]), copy
            // or even a mix of positive numbers, negative numbers and zero
            int maxValue = numbers[0];
            for (int i = 1; i < numbers.Length; i++){
                if (numbers[i] > maxValue){
                    maxValue = numbers[i];
                }
            }
            Console.WriteLine(maxValue);
            return maxValue;
        }
        static int[] anArray = { 3, 2, -3, 5, -23 };
        int max = FindMax(anArray);

        public static void GetAverage(int[] numbers){
            // Write a function that takes an integer array and prints the AVERAGE of the values in the array.
            // For example, with an array [2, 10, 3], your program should write 5 to the console.
            int sum = 0;
            for (int i = 0; i < numbers.Length; i++){
                sum += numbers[i];
            }
            Console.WriteLine(sum / numbers.Length);
        }

        public static int[] OddArray(){
            // Write a function that creates, and then returns, an array that contains all the odd numbers between 1 to 255.
            // When the program is done, this array should have the values of [1, 3, 5, 7, ... 255].
            List<int> odds = new List<int>();
            int i = 0;
            while (i <= 255){
                if (i % 2 != 0) {
                    odds.Add(i);
                }
                i++;
            }
            int[] temp = new int[odds.Count];
            for (int x = 0; x < temp.Length; x++){
                temp[x] = odds[x];
            }
            return temp;
        }
        int[] odds = OddArray();

        public static int GreaterThanY(int[] numbers, int y){
            // Write a function that takes an integer array, and a integer "y" and returns the number of array values
            // That are greater than the "y" value.
            // For example, if array = [1, 3, 5, 7] and y = 3. Your function should return 2
            // (since there are two values in the array that are greater than 3).
            int count = 0;
            short i = 0;
            while (i < numbers.Length){
                if (numbers[i] > y){
                    count++;
                }
                i++;
            }
            return count;
        }
        static int[] anotherArray = { 3, 2, -3, 5, -23 };
        static int num = 4;
        int greaterThanY = GreaterThanY(anotherArray, num);

        public static void SquareArrayValues(int[] numbers){
            // Write a function that takes an integer array "numbers", and then multiplies each value by itself.
            // For example, [1,5,10,-10] should become [1,25,100,100]
            for (int i = 0; i < numbers.Length; i++){
                numbers[i] *= numbers[i];
            }
            Console.WriteLine(numbers);
        }

        public static void EliminateNegatives(int[] numbers){
            // Given an integer array "numbers", say [1, 5, 10, -2], create a function that replaces any negative number with the value of 0.
            // When the program is done, "numbers" should have no negative values, say [1, 5, 10, 0].
            for (int i = 0; i < numbers.Length; i++){
                if (numbers[i] < 0){
                    numbers[i] = 0;
                }
            }
            Console.WriteLine(numbers);
        }

        public static void MinMaxAverage(int[] numbers){
            // Given an integer array, say [1, 5, 10, -2], create a function that prints the maximum number in the array,
            // the minimum value in the array, and the average of the values in the array.
            int max = numbers[0];
            int min = numbers[0];
            int sum = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] > max){
                    max = numbers[i];
                }
                if (numbers[i] < min){
                    min = numbers[i];
                }
                sum += numbers[i];
            }
            int avg = sum / numbers.Length;
            Console.WriteLine(max);
            Console.WriteLine(min);
            Console.WriteLine(avg);
        }

        public static void ShiftValues(int[] numbers){
            // Given an integer array, say [1, 5, 10, 7, -2],
            // Write a function that shifts each number by one to the front and adds '0' to the end.
            // For example, when the program is done, if the array [1, 5, 10, 7, -2] is passed to the function,
            // it should become [5, 10, 7, -2, 0].
            for (int i = 0; i < numbers.Length-1; i++){
                numbers[i] = numbers[i++];
            }
            numbers[numbers.Length-1] = 0;
        }

        public static object[] NumToString(int[] numbers){
            // Write a function that takes an integer array and returns an object array
            // that replaces any negative number with the string 'Dojo'.
            // For example, if array "numbers" is initially [-1, -3, 2]
            // your function should return an array with values ['Dojo', 'Dojo', 2].
            object[] temp = new object[numbers.Length];
            short i = 0;
            while (i <numbers.Length){
                if (numbers[i] < 0){
                    temp[i] = "Dojo";
                }
                else{
                    temp[i] = (object)numbers[i];
                }
                i++;
            }
            return temp;
        }
        static int[] nums = { 3, 2, -3, 5, -23 };
        object[] myStringyArray = NumToString(nums);

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            int[] anArray = { 3, 2, -3, 5, -23 };
            int num = 4;
            PrintNumbers();
            PrintOdds();
            PrintSum();
            LoopArray(anArray);
            FindMax(anArray);
            GetAverage(anArray);
            OddArray();
            GreaterThanY(anArray, num);
            SquareArrayValues(anArray);
            EliminateNegatives(anArray);
            MinMaxAverage(anArray);
            ShiftValues(anArray);
            NumToString(anArray);
        }
    }
}
