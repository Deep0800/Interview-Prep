// What is the output of the following code?
var a = 10;
(function () {
  console.log(a);
  var a = 20;
})(); //undefined

// What is the output of the following code?
console.log(x); //undefined
var x = 5;
console.log(x); //5

// What happens when you declare the same variable with var multiple times?
var x1 = 10;
var x1 = 20;
console.log(x1); //20

// What is the output of the following code?
// let a1 = 10;
// let a1 = 20;
// console.log(a1); // syntaxError

// What is the output of the following code?
// console.log(a2);
// let a2 = 5; // ReferenceError

// What is the output of the following code?
let x2;
console.log(x2); // undefined
x2 = 10;

// What is the output of the following code?
function test() {
  if (true) {
    var x3 = 10;
  }
  console.log(x3);
}
console.log(test()); // 10

// What is the output of the following code?
// function test1() {
//   if (true) {
//     let x4 = 10;
//   }
//   console.log(x4);
// }
// console.log(test1()); // ReferenceError

// What is the output of the following code?
const x5 = { a: 10 };
x5.a = 20;
console.log(x5.a); //20

// What is the output of the following code?
// const a3 = 10;
// a3 = 20;
// console.log(a3); // TypeError

// What is the output of the following code?
var a4 = 10;
(() => {
  console.log(a4);
  var a4 = 20;
})(); //undefined

// What is the output of the following code?
{
  var a5 = 10;
}
console.log(a5); //10

// What is the output of the following code?
{
  let a = 10;
}
console.log(a); //ReferenceError

// What is the output of the following code?
var x = 10;
(() => {
  console.log(x);
  var x = 20;
})(); //undefined

// What is the output of the following code?
// let x = 10;
// (() => {
//   console.log(x);
//   let x = 20;
// })(); //ReferenceError
