using System;
using System.Collections.Generic;

namespace DeckOfCards
{
    class Deck
    {
        public static List<Card> cards;

        public Deck()
        {
            string[] faces = { "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King" };
            cards = new List<Card>();
            for (short i = 1; i <= 4; i++)
            {
                for (short j = 0; j < 13; j++)
                {
                    if (i == 1)
                    {
                        string suit = "Club";
                        short num = (short)((int)j + 1);
                        string face = faces[j];
                        cards.Add(new Card(face, suit, num));
                    };
                    if (i == 2)
                    {
                        string suit = "Spade";
                        short num = (short)((int)j + 1);
                        string face = faces[j];
                        cards.Add(new Card(face, suit, num));
                    };
                    if (i == 3)
                    {
                        string suit = "Diamond";
                        short num = (short)((int)j + 1);
                        string face = faces[j];
                        cards.Add(new Card(face, suit, num));
                    };
                    if (i == 4)
                    {
                        string suit = "Heart";
                        short num = (short)((int)j + 1);
                        string face = faces[j];
                        cards.Add(new Card(face, suit, num));
                    };
                };
            };
        }
        public Card Deal()
        {
            Card topCard = cards[0];
            cards.RemoveAt(0);
            return topCard;
        }
        public Deck Reset()
        {
            Deck newDeck = new Deck();
            return newDeck;
        }
        public List<Card> Shuffle()
        {
            Random rand = new Random();
            int n = cards.Count;
            while (n > 1)
            {
                n--;
                int i = rand.Next(n + 1);
                Card swapCard = cards[i];
                cards[i] = cards[n];
                cards[n] = swapCard;
            }
            return cards;
        }
    }
}