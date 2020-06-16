// Q11
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)


//WORK WITH ARRAY - Not the same as Q4

function calculateAverage(grades) {
    let sum  = null;
    grades.forEach(function(element){
        sum = sum + element;
        return sum;
    })
    let avg = Math.round(sum/grades.length);
    return avg;
}

console.log(calculateAverage([76, 60, 83, 100, 78]));
