console.log("Destructuring Assignment");

const profile = {
    firstName: "Eko",
    lastName: "Cahyadi",
    age: 22
}

let firstName = "Dicoding";
let age = 23;
({ firstName, age } = profile)

console.log(firstName);
console.log(age);