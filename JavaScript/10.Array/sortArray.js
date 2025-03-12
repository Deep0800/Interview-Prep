// Basic Sorting (Lexicographical Order)
let fruits = ["watermelon", "apple", "grapes"];
fruits.sort();
console.log(fruits); //[ 'apple', 'grapes', 'watermelon' ]

// Sorting Numbers (Using a Compare Function)
let num1 = ["23", "12", "1", "43", "2"];
num1.sort((a, b) => a - b); // Ascending order
console.log(num1); // [ '1', '2', '12', '23', '43' ]

let num2 = ["23", "12", "1", "43", "2"];
num2.sort((a, b) => b - a); // Descending order
console.log(num2); // [ '43', '23', '12', '2', '1' ]

// Sorting an Array of Objects
let users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
users.sort((a, b) => a.age - b.age);
console.log(users);

// Case-Insensitive Sorting (Strings)
let words = ["sky", "Ocean", "air"];
words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(words); //[ 'air', 'Ocean', 'sky' ]

// Shuffling an Array (Random Order) 
let arr = [1, 2, 3, 4, 5];
arr.sort(() => Math.random() - 0.5);
console.log(arr);
