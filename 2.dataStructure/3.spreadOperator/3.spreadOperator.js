// Spread Operator menyebarkan nilai array (iterable object)
// Spread Operator menggunakan ...
console.log("Array Biasa:");
const makanan = ["Nasi Goreng", "Mie Goreng", "Bakso", "Sate"];

console.log(makanan);

// Code diatas masih menggunakan array
// Code dibawah sudah menggunakan spread operator
// Penulisan console.log(..makananan);
// Sama seperti console.log(favorites[0], favorites[1], favorites[2], favorites[3]);
console.log("\nSpread Operator pada Array:");
console.log(...makanan);

console.log("\nMenggabungkan dua kedalam suatu variable");

// Kita bisa juga bisa menggabungkan dua array kedalam sebuah array

const sayur = ["Sawi", "Kangkung", "Bayam", "Tomat"];
const buah = ["Pisang", "Mangga", "Apel"];

const sayurBuah = [...sayur, ...buah];

console.log(sayurBuah);

// Object literals adalah menggabungkan beberapa object degan kode yang lebih ringkas
// Catatan object literals ga boleh sama dalam penamaan keys di dalam properties
console.log("\nSpread Operator pada Objects");
const dosen = { nama: "Cahya", umur: 30 };
const mahasiswa = { nama1: "Eko", umur1: 22 };

const jurusan = { ...dosen, ...mahasiswa };
console.log(jurusan);
