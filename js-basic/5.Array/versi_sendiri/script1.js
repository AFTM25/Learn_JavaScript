let barang1 = ["Meja", "Kursi", "Pintu"];
let barang2 = ["Kaca", "Piring", "Gelas", "Sendok", "Mangkuk"];

// untuk Menambah elemen menggunakan for loop
for (let i = 0; i < barang2.length; i++) {
  barang1.push(barang2[i]);
}
console.log(barang1.join(" / "));

// Menghapus elemen
for (let i = 0; i < 2; i++) {
  // 2 itu untuk menentukan jumlah elemen yang ingin dihapus
  barang1.pop();
}

console.log(barang1.join(" : "));
