let jenisBarang = prompt("Masukkan jenis barang (cth: elektronik, makanan, kimia) : ");
let statusSuhu = prompt("Masukkan status suhu (cth: panas, dingin, normal) : ");
switch (jenisBarang) {
  case "elektronik":
    if (statusSuhu == "panas") {
      console.log("Simpan ke pendingin darurat");
    } else {
      console.log("Simpan ke rak umum");
    }
    break;
  case "makanan":
    if (statusSuhu == "dingin") {
      console.log("Simpan ke ruang makanan segar");
    } else if (statusSuhu == "panas") {
      console.log("Simpan ke ruang observasi sementara");
    } else {
      console.log("Simpan ke rak makanan umum");
    }
    break;
  default:
    console.log("Jenis Barang tidak tersedia");
}
