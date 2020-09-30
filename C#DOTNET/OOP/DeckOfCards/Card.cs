namespace DeckOfCards
{
    class Card
    {
        public string stringVal; // card face (A-K)
        public string suit; // card suit (Club, Spade, Diamond, Heart)
        public short val; //numerical val of card (1-13)
        public Card(string face, string suit, short num)
        {
            stringVal = face;
            this.suit = suit;
            val = num;
        }
    }
}
