// What is the output?
const url = "https://example.com/home";
console.log(url.startsWith("https")); //true

// What is the output?
const email = "user@example.com";
console.log(email.split("@")[1]); //example.com

// What is the output?
const sentence = "The quick brown fox";
console.log(sentence.includes("quick")); //true

// What is the output?
const file = "document.pdf";
console.log(file.split(".").pop()); //pdf

// What is the output?
const name = " John Doe ";
console.log(name.trim()); // "John Doe"

// What is the output?
const url1 = "https://example.com/home";
console.log(url1.replace("https://", "")); //example.com/home

// What is the output?
const phone = "+1-800-555-0199";
console.log(phone.replace(/\D/g, "")); //18005550199

// What is the output?
const text = "hello world";
console.log(text.charAt(0).toUpperCase() + text.slice(1)); //Hello world

// What is the output?
const text1 = "Hello world, welcome to JavaScript!";
console.log(text1.split(/\s+/).length); //5

// What is the output?
const str = "JavaScript is fun!";
console.log(str.substring(0, 10) + "..."); //JavaScript...

// What is the output?
const input = "1234567890";
console.log(input.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")); //(123) 456-7890

// What is the output?
const price = "USD 150.99";
console.log(price.replace(/\D/g, "")); //15099

// What is the output?
const sentence1 = "I love coding!";
console.log(sentence1.endsWith("coding!")); //true

// What is the output?
const data = "apple,banana,orange";
console.log(data.split(",").join(" | ")); //apple | banana | orange

// What is the output?
const tweet = "JavaScript is amazing! #coding #js";
console.log(tweet.match(/#\w+/g)); //[ '#coding', '#js' ]

// What is the output?
const card = "1234567812345678";
console.log(card.slice(-4).padStart(card.length, "*")); //************5678
