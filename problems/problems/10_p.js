let num_1 = 0;
let num_2 = 1; 
let nextNum;

for (let i = 1; i <= number; i++) {
    console.log(num_1);
    nextNum = num_1 + num_2;
    num_1 = num_2;
    num_2 = nextNum;
}