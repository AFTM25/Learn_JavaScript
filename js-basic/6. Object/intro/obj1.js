// Membuat Object
let profile1 = {
  nama: "Aditya",
  umur: 21,
  pekerjaan: "Helper Gudang",
  alamat: {
    jalan: "Jl. Cut Nyak Dhien",
    kota: "Kuningan",
    provinsi: "Jawa Barat",
  },
};

console.log(profile1.nama);
console.log(profile1["pekerjaan"]);
console.log(profile1.alamat["provinsi"]);
console.log(profile1.alamat.jalan);
