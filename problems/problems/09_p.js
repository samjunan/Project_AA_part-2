let n = 5;

// checking if number is negative
if (n < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

else if (n === 0) {
    console.log(`The factorial of ${n} is 1.`);
}

else {
    let facto = 1;
    for (i = 1; i <= n; i++) {
        facto *= i;
    }
    console.log(`The factorial of ${n} is ${facto}.`);
}

console.log();