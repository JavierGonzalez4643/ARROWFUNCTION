const mazoEspadasASCII = [
  'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'
];

// Tu código aquí 👈
const getCardPosition = (deck, card) => deck.indexOf(card);

console.log(getCardPosition(mazoEspadasASCII, '7♠')); 

