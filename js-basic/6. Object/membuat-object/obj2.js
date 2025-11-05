// Membuat Object

// Object Literal
let barang1 = {
  nama: "Sepatu",
  harga: 78000,
};

let barang2 = {
  nama: "Baju",
  harga: 50000,
};

console.log(barang1.nama);
console.log(barang2.nama);

// Function Declaration
function produk(namaBarang, hargaBarang) {
  let barang = {};
  barang.nama = namaBarang;
  barang.harga = hargaBarang;
  return barang;
}

let barang3 = produk("Celana", 60000);
console.log(barang3);

// Constructor Function
// tidak menggunakan nama variabel dan return seperti function declaration
// biasanya nama variabel awalan menggunakan huruf besar
function Produk2(namaBarang, hargaBarang) {
  this.nama = namaBarang;
  this.harga = hargaBarang;
}

let barang4 = new Produk2("Topi", 10000);
let barang5 = new Produk2("Tas", 45000);
console.log(barang4);
console.log(barang5);
