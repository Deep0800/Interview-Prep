// Using flat(Infinity) (Best & Simplest Method)
let arr = [1, [2, [3, [4, 5]]]];
let flatArr = arr.flat(Infinity);
console.log(flatArr); // [1, 2, 3, 4, 5]