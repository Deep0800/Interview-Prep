let person = { name: "Alice", age: 25, city: "New York" };

// When you need keys
let keysArray = Object.keys(person);
console.log(keysArray);  // Output: ["name", "age", "city"]

// When you need values
let valuesArray = Object.values(person);
console.log(valuesArray);  // Output: ["Alice", 25, "New York"]

// When you need key-value pair
let entriesArray = Object.entries(person);
console.log(entriesArray); // Output: [["name", "Alice"], ["age", 25], ["city", "New York"]]
