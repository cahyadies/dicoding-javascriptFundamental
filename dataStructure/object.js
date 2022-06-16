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
// Dengan menggunakan kurung siku atau bracket pada key yang memiliki spasi atau karaktek spesial

const mahasiswa = {
    firstName: "Eko",
    lastName: "Sugeng Cahyadi",
    NIM: 2017044,
    "umur saya": 22,
};

console.log(`Halo nama saya ${mahasiswa.firstName} ${mahasiswa.lastName}`);
console.log(`Umur saya ${mahasiswa["umur saya"]}`);