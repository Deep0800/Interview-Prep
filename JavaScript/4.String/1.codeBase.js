//What is the output of the following?
console.log("5" + 5); //55

//What is the output of the following?
console.log("5" - 3); //2

//What is the output of the following?
console.log("hello".charAt(1)); //e

//What is the output of the following?
console.log("hello"[2]); //l

//What is the output of the following?
console.log("JavaScript".slice(4, 10)); // Script

//What is the output of the following?
console.log("Hello".toUpperCase()); // HELLO

//What is the output of the following?
console.log("HELLO".toLowerCase()); //hello

//What is the output of the following?
console.log("JavaScript".indexOf("S")); // 4

//What is the output of the following?
console.log("hello".repeat(3)); //hellohellohello

//What is the output of the following?
console.log("  hello  ".trim()); // "hello"

//What is the output of the following?
console.log("hello".includes("ll")); //true

//What is the output of the following?
console.log("JavaScript".replace("Java", "Type")); //TypeScript

//What is the output of the following?
console.log("hello".padStart(10, "*")); //*****hello

//What is the output of the following?
console.log("hello".padEnd(10, "*")); // hello*****

//What is the output of the following?
let split = "Hello World".split(" ");
console.log(split); //[ 'Hello', 'World' ]
console.log(typeof split); //object

//What is the output of the following?
console.log("JavaScript".substring(4, 10)); //Script

//What is the output of the following?
console.log(typeof "Hello"); //string

//What is the output of the following?
console.log(typeof new String("Hello")); //object

//What is the output of the following?
console.log("hello".charAt(10)); //"" (empty string)

//What is the output of the following?
console.log("hello".startsWith("h")); //true

//What is the output of the following?
console.log("hello".substring(-2)); //hello

//What is the output of the following?
console.log("JavaScript".at(-2)); //p

//What is the output of the following?
console.log("apple".replace(/p/g, "b")); //abble

//What is the output of the following?
console.log("Hello".concat(" ", "World!")); //Hello World!

//What is the output of the following?
console.log("racecar".split("")); //['r', 'a', 'c','e', 'c', 'a','r']
console.log("racecar".split("").reverse()); //['r', 'a', 'c','e', 'c', 'a','r']
console.log("racecar".split("").reverse().join("")); //racecar
console.log("racecar" === "racecar".split("").reverse().join("")); //true

//What is the output of the following?
console.log("Hello".padStart(8, "123")); //123Hello

//What is the output of the following?
console.log("".length); //0

//What is the output of the following?
console.log("Hello".slice(-3)); //llo

//What is the output of the following?
console.log("JavaScript".substring(4)); //Script

//What is the output of the following?
console.log("javascript".charAt()); //j

//What is the output of the following?
console.log("JS".repeat(0)); //""

//What is the output of the following?
console.log("Hello".search(/l/)); //2

//What is the output of the following?
console.log("Hello".indexOf("z")); //-1

//What is the output of the following?
console.log("banana".lastIndexOf("a")); //5


//What is the output of the following?
console.log("Hello".split("")); //[ 'H', 'e', 'l', 'l', 'o' ]

//What is the output of the following?
console.log("hello".replace("h", "H")); // Hello

//What is the output of the following?
console.log("10" + 10); //1010
console.log("10" + 10 - "5"); //1005  

//What is the output of the following?
console.log(typeof "hello".toUpperCase); // function

//What is the output of the following?
console.log("hello world".startsWith("h")); //true

//What is the output of the following?
console.log("hello world".endsWith("world")); //true