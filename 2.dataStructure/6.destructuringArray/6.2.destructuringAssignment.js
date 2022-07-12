const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);

// Contoh lain destructuring array 

let a = 1;
let b = 2;
console.log("\nContoh lain destructuring array ");
console.log("Sebelum Swap");
console.log("nilai a:" + a);
console.log("nilai b:" + b);

[a, b] = [b, a]

console.log("Setelah Swap");
console.log("nilai a:" + a);
console.log("nilai b:" + b);

