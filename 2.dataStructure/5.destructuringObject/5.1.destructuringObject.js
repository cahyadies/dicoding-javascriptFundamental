// Kita buat objectnya dulu
// Destructuring Object
console.log("Destructuring Object");
const profile = {
    firstName: "Eko",
    middleName: "Sugeng",
    lastName: "Cahyadi",
    age: 22
}
// Kita juga bisa mendesktrukturisasi salah satu nilai saja
const { firstName, middleName, lastName } = profile

console.log("Hasil Destructuring perbaris:");
console.log(firstName);
console.log(middleName);
console.log(lastName);

console.log("\nHasil Destructuring satu baris:");
console.log(firstName, middleName, lastName);

