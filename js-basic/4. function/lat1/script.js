// Kode sebelum menggunakan function
// Case nya menghitung jumlah kedua volume kubus
let kubusA = 8;
let kubusB = 3;
let rmsA = kubusA ** 3;
let rmsB = kubusB ** 3;
let jmlKubus = rmsA + rmsB;
console.log(jmlKubus);

// kode dengan menggunakan function
function jmlhVolumeKubus(kubusA, kubusB) {
  let rmsA = kubusA ** 3;
  let rmsB = kubusB ** 3;
  let total = rmsA + rmsB;
  return total;
}

// Memanggil function nya
// apabila hanya jmlhVolumeKubus() nya saja, tidak akan menampilkan apa-apa;
// karena baru disimpan di dalam memori, belum kita tampilkan;
// untuk menampilkan nya menggunakan console.log() atau alert();
console.log(jmlhVolumeKubus(8, 3));
let inputA = parseInt(prompt("Masukkan sisi kubus A : "));
let inputB = parseInt(prompt("Masukkan sisi kubus B : "));
console.log(jmlhVolumeKubus(inputA, inputB));
