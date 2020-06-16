// Q12
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

function calculateAverage(grades) {
    let sum  = null;
    grades.forEach(function(element){
        sum = sum + element;
        return sum;
    })
    let avg = Math.round(sum/grades.length);
    return avg;
}

function finalGrade (grades){
    let avg = calculateAverage(grades);
    if (avg < 60) {
        return 'F'
    } else if (avg < 70) {
        return 'D'
    } else if (avg < 80) {
        return 'C'
    } else if (avg < 90) {
        return 'B'
    } else return 'A'
}

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

    console.log(finalGrade([48, 95, 65, 48, 59, 78, 72, 65]));

// Try with other values as well

    console.log(finalGrade([50, 95, 85, 100, 98, 80, 90, 65]));
