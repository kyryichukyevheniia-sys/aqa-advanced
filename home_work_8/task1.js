const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
positiveCount = 0;
negativeCount = 0;
zeroCount = 0;
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num > 0) {
        positiveCount++;
    } else if (num < 0) {
        negativeCount++;
    } else {
            zeroCount++;
        }
}
console.log("Кількість позитивних чисел", positiveCount);
console.log("Кількість негативних чисел", negativeCount);
console.log("Кількість нульових чисел", zeroCount);