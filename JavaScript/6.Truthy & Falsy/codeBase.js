// Which of the following is a falsy value in JavaScript?
console.log("false") //false
console.log(0) //0
console.log("0") //0
console.log({}) //{}

// What is the output?
console.log(Boolean([])); //true

// What is the output?
if ("0") {
    console.log("Truthy"); //Truthy
} else {
    console.log("Falsy");
}

// What is the output?
console.log(Boolean(undefined)); //false

// What is the output?
console.log(!!"Hello"); //true

// What is the output?
console.log(Boolean({})); //true

// What is the output?
if (null) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// What is the output?
console.log(!""); //true

// What is the output?
console.log(!!0); //false

// What is the output?
if ([] == false) {
    console.log("Falsy"); //"Falsy"
} else {
    console.log("Truthy");
}

// What is the output?
console.log(Boolean(NaN)); //false

// What is the output?
console.log(!!Infinity) //true

// What is the output?
console.log(!!" "); //true

// What is the output?
console.log(!!false) //false

// What is the output?
console.log(!1); //false

// What is the output?
if (-1) {
    console.log("Truthy"); //Truthy
} else {
    console.log("Falsy");
}

// What is the output?
console.log(Boolean(function() {})) //true

// What is the output?
console.log(Boolean(Symbol())) //true