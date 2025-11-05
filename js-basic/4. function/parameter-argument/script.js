// Intro parameter dan argument

function tambah(a, b) {
  // a dan b adalah parameter
  return a + b;
}

let hasil = tambah(2, 7); // 2 dan 7 adalah argument
console.log(hasil);

function kali(a, b) {
  return a * b;
}

// Menggunakan function argument
let userInputA = parseInt(prompt("Masukkan angka (1) : "));
let userInputB = parseInt(prompt("Masukkan angka (2) : "));
hasil = kali(tambah(userInputA, userInputB), tambah(userInputB, userInputA));
console.log(hasil);
