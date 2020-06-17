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
    let sum = grades.reduce((a, b) => a + b);
    let average = Math.round(sum / grades.length);


    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    if (average < 100) return 'A';
}
// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

console.log(calculateAverage([76, 60, 83, 100, 78]));


// Try with other values as well
console.log(calculateAverage([63, 25, 37, 19, 76, 53]));
console.log(calculateAverage([87, 93, 94, 91]));

