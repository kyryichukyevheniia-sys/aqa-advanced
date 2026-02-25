const oldArrow = [1, 2, 3, 4, 5];
const newArrow = oldArrow.map((number, index) => number * index);
console.log(newArrow);

const numbers = [1, 2, 3, 4, 5];
function operation(nums) {
    return nums.map((num, index)=> num * index);
}
const newNumbers = operation(numbers);
console.log(newNumbers);



const arrow = [1, 2, 3, 4, 5];
const arrowNew = [];

for(let i = 0; i < arrow.length; i++){
    arrowNew.push(arrow[i] * i);
}
console.log(arrowNew);