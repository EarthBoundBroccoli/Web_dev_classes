// An array has been defined here.
let arr = [5, 6, 11, 14, 99, 50]

//This function calculates the average of that given array.
function calculateAverage(){
    let sum = 0;

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sum += element;
    }

    console.log(sum / 6);
}

calculateAverage();


// In this part at first "7777" number is pushed to the array from the last. In the second part an element has been removed from the first.
arr.push(7777);
arr.shift()
console.log(arr);

//Here the array will print each of the elements first and alongside print its square
arr.forEach((num) => {
    console.log(`${num} and its square is ${num ** 2}.`);
});