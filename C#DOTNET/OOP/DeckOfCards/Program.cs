using System;
using System.Collections.Generic;

namespace DeckOfCards
{
    class Program
    {
        static void Main(string[] args)
        {
            Deck newDeck = new Deck();
            Card dealtCard = newDeck.Deal();
            Console.WriteLine(dealtCard);
            newDeck.Reset();
            newDeck.Shuffle();
            Card newDealtCard = newDeck.Deal();
            Player person = new Player("Kim", newDealtCard);
            person.Draw();
            Console.WriteLine(newDeck);
            Console.WriteLine(person.Hand);
            person.Discard(1);
            Console.WriteLine(person.Hand);
            Console.WriteLine("Hello World!");
        }
    }
}