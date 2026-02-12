const averageGrade = 90;
let level;

if (averageGrade < 60) {
    level = "Bad"
} else if (averageGrade >= 60 && averageGrade <= 70) {
    level = "Not Bad";
} else if (averageGrade >= 71 && averageGrade <= 80) {
    level = "Good";
} else if (averageGrade >= 81 && averageGrade <= 90) {
    level = "Very Good";
} else if (averageGrade >= 91 && averageGrade <= 100) {
    level = "Exellent"
}

console.log(level)
