function area (widht, height){
    return widht * height;
}
let result = area(5,10)
console.log(result);

const areaSecond = function (widht,height){
    return widht * height;
}
let resultSecond = areaSecond(5,10);
console.log(resultSecond);

const areaThird = (widht,height) => widht * height;
console.log(areaThird(5,10));