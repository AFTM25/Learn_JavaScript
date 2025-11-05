function Gudang(namaKaryawan, barang, stok, harga) {
  this.karyawan = namaKaryawan;
  this.barang = barang;
  this.stok = stok;
  this.harga = harga;
  this.tambahBarang = function (namaBarang, stok, harga) {
    console.log(`Tambah barang, update stok dan harga berhasil!`);
    this.barang.push(namaBarang);
    this.stok.push(stok);
    this.harga.push(harga);
  };

  this.hapusBarang = function (namaBarang, stok, harga) {
    if (this.barang.length == 0 || this.stok.length == 0 || this.harga.length == 0) {
      console.log(`Barang Belum Tersedia!`);
      return false;
    } else {
      for (let i = 0; i < this.barang.length; i++) {
        if (this.barang[i] === namaBarang && this.stok[i] === stok && this.harga[i] === harga) {
          this.barang.splice(i, 1);
          this.stok.splice(i, 1);
          this.harga.splice(i, 1);
          console.log(`Hapus barang, update stok dan harga berhasil!`);
          return true;
        }
      }
    }
  };
}

let barang1 = new Gudang("Andi", [], [], []);
