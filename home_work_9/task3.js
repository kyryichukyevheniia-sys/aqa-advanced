const car1 = {
    brand: "VW",
    model: "Golf",
    year: 2017
};

const car2 = {
    brand: "Audi",
    model: "A3",
    year: 2020
};

const car3 = { ...car1, ...car2 };
console.log(car3);