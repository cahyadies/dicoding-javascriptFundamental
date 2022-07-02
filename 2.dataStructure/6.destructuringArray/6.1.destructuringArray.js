// Kita buat array dulu
const hewan = ["ayam", "sapi", "kambing", "ikan"];

// Selanjutnya kita buat variable lokal
const [firstAnimal, secondAnimal, thirdAnimal, fourthAnimal] = hewan

console.log(firstAnimal);
console.log(secondAnimal);
console.log(thirdAnimal);
console.log(fourthAnimal);

// Kita bisa memanggil hanya array tertentu dengan
const ikan = ["nila", "patin", "mujair", "kakap"];

const [, , thirdFish,] = ikan

console.log(thirdFish);