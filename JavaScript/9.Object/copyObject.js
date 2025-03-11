let car = { brand: "Toyota", model: "Camry" };

let clonedCar = Object.assign({}, car);  // Copy the object

clonedCar.model = "Corolla";

console.log(car.model);       // Output: "Camry" (unchanged)
console.log(clonedCar.model); // Output: "Corolla"
