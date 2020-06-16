// Q2
// Write a function that accepts two integers and displays
// the greater one.

// Call the function
max(12, 43);

function max(num1, num2) {
    let num;

    if (num1 > num2) {
    num = num1;
    } else {
    num = num2;
    }
    console.log(num);
}