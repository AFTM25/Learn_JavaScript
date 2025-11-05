// Manipulasi Array

// 1. Menambah isi array
// let buah = [];
// buah[0] = "Stroberi";
// buah[1] = "Mangga";
// buah[2] = "Melon";
// buah[3] = "Pepaya";
// buah[7] = "Leci";
// console.log(buah);

// 2. Menghapus isi array
// let barang = ["Meja", "Kursi", "Pintu", "Jendela"];
// barang[2] = undefined;
// console.log(barang);
// dengan menggunakan undefined sebenarnya elemen nya masih ada, cuman ditimpa aja dengan undefined

// 3. Menampilkan isi array
// let hero = ["Luffy", "Zoro", "Nami", "Usopp", "Sanji"];
// for (let i = 0; i < hero.length; i++) {
//   console.log(`Hero ke ${i + 1} = ${hero[i]}`);
// }

// Method Array
// .join()
let hero = ["Luffy", "Zoro", "Nami", "Usopp", "Sanji"];
// console.log(hero.join()); // defaultnya pake koma

// push & pop
hero.push("Arlong", "Crocodile", "Doflamingo");
console.log(hero.join(" - ")); // custom pemisahnya pake strip

hero.pop();
console.log(hero.join(" , "));

hero.pop();
console.log(hero.join(" , "));

hero.pop();
console.log(hero.join(" # "));

// unshift & shift
hero.unshift("Chopper");
console.log(hero.join(" / "));

hero.unshift("Franky");
console.log(hero.join(" # "));

hero.unshift("Robin", "Tobi");
console.log(hero.join(" / "));

hero.shift();
console.log(hero.join(" / "));

hero.shift();
console.log(hero.join(" / "));

// 4. splice
let elektronik = ["hp", "laptop", "keyboard", "mouse", "monitor", "ram"];
elektronik.splice(2, 0, "pita printer", "printer"); // menambah elemen di index ke 2 tanpa menghapus elemen apapun
console.log(elektronik.join(" / "));

elektronik.splice(3, 2);
console.log(elektronik.join(" # "));

// 5. foreach
let items = [
  "Laptop",
  "Kursi",
  "Meja",
  "Botol",
  "Sendok",
  "Buku",
  "Lampu",
  "Tas",
  "Kipas",
  "Televisi",
  "Sepatu",
  "Helm",
  "Motor",
  "Keyboard",
  "Mouse",
  "Handphone",
  "Kacamata",
  "Gelas",
  "Piring",
  "Kabel",
];

items.forEach(function (name, noItem) {
  console.log(`${noItem + 1}. ${name}`);
});

items.splice(5, 3);
items.map(function (name) {
  return name;
});
console.log(items.join(" # "));
console.log("\n\n\n");

items.sort();
console.log(items.join(" / "));

let angka = [1, 10, 2, 20, 3, 30];
angka.forEach(function (item) {
  console.log(item);
});

console.log("\n\n\n");

angka.sort((a, b) => a - b);
angka.map((a) => console.log(a));

console.log("\n\n\n");

let nama = ["agus", "budiana", "clarissa", "septian", "clara"];
nama.sort(); // sorting secara alfabet
nama.forEach((e) => console.log(e));

console.log("\n\n\n");

nama.sort((a, b) => a.length - b.length); // sorting berdasarkan panjang karakter
nama.forEach((tampilNama) => console.log(tampilNama));

// pola nya kalau sort itu menghasilkan string
// kalau pake number perlu ada elemen pembanding (a, b) => a - b atau b - a
//  kalau a - b itu ascending
//  kalau b - a itu descending

// filter & find menghasilkan array baru, jadi perlu var tambahan
// filter -> menghasilkan lebih dari satu elemen sesuai kriteria
// find -> menghasilkan satu elemen sesuai kriteria
let buah = ["apel", "mangga", "pisang", "apel merah", "jeruk", "apel hijau"];
let buah2 = buah.filter(function (nama) {
  return nama > "apel";
});
console.log(buah2.join(" - "));

let buah3 = buah.find(function (nama) {
  return nama > "apel";
});
console.log(buah3);
