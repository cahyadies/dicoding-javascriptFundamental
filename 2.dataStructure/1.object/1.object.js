// Object adalah tipe data yang dapat menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks

const manusia = {
    nama: "Budi",
    umur: 22,
    alamat: "Malang",
};

// Untuk mengakses object kita menggunakan dot operator seperti pada contoh dibawah
// Penulisan untuk pemanggilan juga menggunakan ${key.value}
console.log(manusia);
console.log(`Perkenalkan Nama saya ${manusia.nama}, umur saya ${manusia.umur}`);

// Adapula contoh lain dalam pemanggilan object
// Selain dot operator, kita juga bisa mengakses properti dari object menggunakan bracket atau tanda kurung siku
// Dengan menggunakan kurung siku atau bracket pada key yang memiliki spasi atau karaktek spesial

const mahasiswa = {
    namaDepan: "Eko",
    namaBelakang: "Sugeng Cahyadi",
    alamat: "Sampit",
    NIM: 2017044,
    "umur saya": 22,
};

console.log(`Halo nama saya ${mahasiswa.namaDepan} ${mahasiswa.namaBelakang}`);
console.log(`Alamat saya ${mahasiswa.alamat}`);
console.log(`NIM saya ${mahasiswa.NIM}`);
console.log(`Umur saya ${mahasiswa["umur saya"]}`);

// Mengubah sebuah objek dengan mengubah nilai properti di dalam object menggunakan assignment operator (=)
// Masih menggunakan object mahasiswa

mahasiswa.NIM = 2022044;
mahasiswa["umur saya"] = 23;

console.log(`NIM baru saya adalah ${mahasiswa.NIM}`);
console.log(`Umur saya sekarang jadi ${mahasiswa["umur saya"]}`);

// Jika ingin menambahkan property pada object, buat saja langsung seperti dibawah
mahasiswa.jurusan = "Informatika";

console.log(mahasiswa);

// Kita bisa menghapus property pada object menggunakan delete
delete mahasiswa.jurusan;

console.log(mahasiswa);