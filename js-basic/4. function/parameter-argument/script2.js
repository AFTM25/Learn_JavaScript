// Menggunakan function arguments
function tambah() {
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

let hasil = tambah(9, 9, 5, 4, 90);
console.log(hasil);
