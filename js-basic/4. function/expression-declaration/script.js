// topik : function declaration vs function expression
// penguasaan konsep dasar = paham kalau di :
// function declaration ada yang namanya hoisting
// function expression ada yang namanya closure

// kode program pak sandhika
sapaNama("Anton");

function sapaNama(nama) {
  console.log("Hello " + nama);
}

let tampilPesan = function (nama) {
  console.log("Selamat Datang " + nama);
};

// kode sendiri
console.log(harga("mouse"));

function harga(barang) {
  let harga = 0;
  switch (barang) {
    case "keyboard":
      harga = 150000;
      break;
    case "mouse":
      harga = 50000;
      break;
    case "stand laptop":
      harga = 102000;
      break;
    default:
      harga = "Tidak ada nama barang yang dituju";
  }

  return `Barang yang anda pilih\n${barang.toUpperCase()}\nDengan Harga Rp${harga}`;
}

let barang = function (kode) {
  let namaBarang = 0;
  switch (kode) {
    case 1:
      namaBarang = "Spidol";
      break;
    case 2:
      namaBarang = "Pulpen";
      break;
    case 3:
      namaBarang = "Penghapus";
      break;
    case 4:
      namaBarang = "Penggaris";
      break;
    default:
      namaBarang = "Nama barang tidak ditemukan";
  }

  return `Kode barang : ${kode} = ${namaBarang}`;
};

console.log(barang(3));
