const averageGrade = 80;
switch (true){
    case averageGrade < 60:
        console.log("Bad");
        break;
    case averageGrade >= 60 && averageGrade <= 70:
        console.log("Not bad");
        break;
    case averageGrade >= 71 && averageGrade <= 80:
        console.log("Good");
        break;
    case averageGrade >= 81 && averageGrade <= 90:
        console.log("Very good");
        break;
    case averageGrade >= 91 && averageGrade<= 100:
        console.log("Exellent");
        break;
}