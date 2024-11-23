function isPalindrome(word){
    //here the word is split into letters and it becomes an array, then the array is reversed and the array is joined into a single word again.
    let reversedWord = word.split("").reverse().join("");

    //Here if statement will check if the original word is same ase reversed word.
    if (reversedWord === word) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

let word = prompt("Enter a word: ");
isPalindrome(word);