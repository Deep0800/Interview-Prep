// Using delete Operator (Modifies Original Object)
let user = { name: "Deep", age: 25, city: "Navsari" };

delete user.age;

console.log(user); // Output: { name: "Alice", city: "New York" }

// Using Reflect.deleteProperty() (Alternative to delete)
Reflect.deleteProperty(user, "city");
console.log(user); 