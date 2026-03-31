const grades = [1.0, 1.5, 3.0, 5.0, 3.5, 4.0, 2.0, 4.5];
const min = 3.0;

const average = calculateAverage(grades);
console.log("Średnia ocen: ", average);
console.log("Zaliczenie (równo lub powyżej 3.0): ", getStudentResult(grades));
console.log("Klasyfikacja oceny: ", getGradeLabel(average));

function calculateAverage(grades) {
    const sum = grades.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
    );

   return sum/grades.length;
}

function getStudentResult(grades) {
    const average = calculateAverage(grades);
    const status = average >= min ? "Zaliczone" : "Niezaliczone";

    return {
        average: average,
        status: status
    };
}

function getGradeLabel(average) {
    if (average >= 4.5) return "Bardzo dobry";
    if (average >= 3.5) return "Dobry";
    if (average >= 3.0) return "Dostateczny";
    return "niedostateczny";
}