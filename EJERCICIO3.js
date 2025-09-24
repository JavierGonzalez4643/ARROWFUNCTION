const mazoEspadasASCII = [
  'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'
];

// Tu código aquí 👈
const isEachCardEven = (deck) => deck.every((card) => {
  const value = parseInt(card) || (card === 'Q♠' ? 12 : 0);
  return value !== 0 ? value % 2 === 0 : false;
});

console.log(isEachCardEven(['2♠', '4♠', '6♠', 'Q♠'])); 
