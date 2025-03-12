// slice() → Returns a Copy Without Modifying Original Array
let fruits = ["apple", "banana", "cherry", "date"];
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // [ 'banana', 'cherry' ]
console.log(fruits); // [ 'apple', 'banana', 'cherry', 'date' ]

// splice() → Modifies the Original Array
// (Removing Elements)
let city = ["Surat", "Navsari", "Mumbai", "Pune"];
let removedCity = city.splice(1, 2);

console.log(removedCity); // [ 'Navsari', 'Mumbai' ]
console.log(city); // [ 'Surat', 'Pune' ] (Original array is modified)

// (Adding Elements)
city.splice(1,0, "Bengaluru", "Ahemdabad")
console.log(city)

// (Replacing Elements)
city.splice(1,1, "Navsari")
console.log(city)