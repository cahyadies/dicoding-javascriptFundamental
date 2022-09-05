// const myMap = new Map([
//     ['1', 'a string key'],
//     [1, 'a number key'],
//     [true, true]
// ]);

// console.log(myMap);

console.log("\nMap Lainnya");

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"],
]);

console.log(capital);
console.log(capital.size);
console.log(capital.get("London"));
console.log(capital.set("New Delhi", "India"));
console.log(capital.size);
console.log(capital.get("New Delhi"));
