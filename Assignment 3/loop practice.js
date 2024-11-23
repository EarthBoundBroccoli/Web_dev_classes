// This loop counts from 1 to 100 and checks if the number is divisible by 3 and 5 or not. And, it prints the number if it follows the condition.
for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log(index);
    }
}


//This part initializes sum and i = 0, then the while loop counts until 50 and adds each number to the sum.
let sum = 0;
let i = 0;
while (i <= 50) {
    sum += i;
    i++;
}
console.log(sum);