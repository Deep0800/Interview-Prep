const person1 = {
  name: "Deep",
  age: 25,
};

const address = {
  city: "Surat",
};

let mergedObj = Object.assign({}, person1, address);
console.log(mergedObj);
