using System;
using System.Collections.Generic;

namespace DeckOfCards
{
    class Player
    {
        public string Name;
        public List<Card> Hand;

        public Player(string name, Card dealtCard)
        {
            Name = name;
            Hand = new List<Card>();
            Hand.Add(dealtCard);
        }

        public Card Draw()
        {
            Random rand = new Random();
            int cardIndex = rand.Next(0, 53);
            Card card = Deck.cards[cardIndex];
            Deck.cards.RemoveAt(cardIndex);
            return card;
        }

        public Card Discard(int card)
        {
            if (Deck.cards.Contains(Deck.cards[card]))
            {
                Card discardedCard = Deck.cards[card];
                Deck.cards.RemoveAt(card);
                return discardedCard;
            }
            else
            {
                return null;
            }
        }
    }
}