let person = { name: "Deep", age: 25, city: "Navsari" };

let jsonString = JSON.stringify(person);
console.log(jsonString); // Output: '{"name":"Alice","age":25,"city":"New York"}'

// To make JSON more readable, use space indentation.
let prettyJson = JSON.stringify(person, null, 2);
console.log(prettyJson);

// Filtering Properties Using JSON.stringify(obj, replacer)
let filterJsonString = JSON.stringify(person, ["name", "age"], 2);
console.log(filterJsonString);
