let sentence = "I am Raiyan."

let upperString = sentence.toUpperCase();
let specificPositionOfWord = sentence.indexOf("Raiyan");
let replacingWord = sentence.replace("Raiyan", "Arafat");
//here the word is split into letters and it becomes an array, then the array is reversed and the array is joined into a single word again.
let reversedSentence = sentence.split("").reverse().join("");


console.log(upperString);
console.log(specificPositionOfWord);
console.log(replacingWord);
console.log(reversedSentence);