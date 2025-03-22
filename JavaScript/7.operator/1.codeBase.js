// What is the output?
console.log(5 + "5"); //55

// What is the output?
console.log(5 - "2"); //3

// What is the output?
console.log(null == undefined); //true
console.log(null === undefined); //false

// What is the output?
console.log(0 || "Hello"); //Hello (|| returns the first truthy value)

// What is the output?
console.log(1 && 2 && 0 && 3); //0  (&& returns the first falsy value)

// What is the output?
console.log(!!"false"); //true
console.log(!!false); //false

// What is the output?
console.log(5 & 3); //1 (Binary 101 & 011 = 001)

// What is the output?
console.log(typeof NaN); //number

// What is the output?
console.log(false ?? "default"); //false (?? only checks for null and undefined)

// What is the output?
console.log(10 >> 1); //5 (10 >> 1 shifts bits right, equivalent to 10 / 2)

// What is the output?
console.log(0 ?? "JS"); //  0 (Nullish coalescing ?? only checks null and undefined)

// What is the output?
console.log("5" - -"5"); //10

// What is the output?
console.log(4 | 3); //7

// What is the output?
console.log([] + []); //"" (Empty arrays convert to empty strings in concatenation)

// What is the output?
console.log(1 + true); //2 true is converted to 1, so 1 + 1 = 2)

// What is the output?
let num = 5 + "5" - 5;
console.log(num); //50
console.log(typeof num); //number

// What is the output?
let num1 = 10;
let num2 = 20;
console.log("Sum of num1 and num2=" + num1 + num2); //Sum of num1 and num2=1020
console.log("Sum of num1 and num2=", num1 + num2); //Sum of num1 and num2= 30

// What is the output?
console.log("5" * 5); //25
console.log("25" / 5); //5
