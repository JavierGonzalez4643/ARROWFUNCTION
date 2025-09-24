const mazoEspadasASCII = [
  'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'
];

// Tu código aquí 👈
const getFirstOddCard = (deck) => deck.find((card) => {
  const value = parseInt(card) || (card === 'A♠' ? 1 : (card === 'J♠' ? 11 : (card === 'K♠' ? 13 : 0)));
  return value % 2 !== 0;
});

console.log(getFirstOddCard(mazoEspadasASCII)); 
