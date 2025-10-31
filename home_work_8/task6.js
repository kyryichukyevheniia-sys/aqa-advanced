const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedNumbersList = Array.from(numbersList);
copiedNumbersList.sort((a, b) => a - b);
console.log(copiedNumbersList);
