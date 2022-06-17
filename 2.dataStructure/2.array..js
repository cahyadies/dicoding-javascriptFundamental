// Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan dan menempatkan dalam satu variable

let myArray = ["coklat", 42.5, 45, true, "Programming"];
console.log(myArray);

// Perbedaan object dan array, array disusun secara urut
// Mengakses nilai array menggunakan index []
// Array dimulai dari index [0]

console.log(myArray[1]);

// Jika kita mengakses nilai diluar index array maka akan undefined
// Untuk mengetahui panjang array kita bisa menggunakan .length
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

// Push akan menambahkan data pada akhir array
myArray.push("JavaScript");
console.log(myArray);

// Pop akan mengeluarkan data pada akhir array
myArray.pop();
console.log(myArray);

// Shift akan mengeluarkan elemen pertama pada array
myArray.shift();
console.log(myArray);

// Unshift akan menambahkan elemen pada awal array
myArray.unshift("Bubur");
console.log(myArray);

// Delete akan menghapus data pada array
delete myArray[1];
console.log(myArray);

// Splice untuk menghapus elemen pada array 
myArray.splice(1, 1);
console.log(myArray);