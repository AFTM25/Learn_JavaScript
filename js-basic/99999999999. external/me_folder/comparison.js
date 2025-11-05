function comparison() {
  let inputAngka = +prompt("Masukkan angka (1) : ");

  let pilihOperasi = prompt("Pilih opersai ( >, <, <=, >= ) : ");
  let hasil = 0;
  switch (pilihOperasi) {
    case ">":
      alert(`Apakah benar ${a} > ${b}? = ${a > b}`);
      break;
    case "<":
      return (hasil = a < b);
      break;
    case "<=":
      return (hasil = a <= b);
      break;
    case ">=":
      return (hasil = a >= b);
      break;
    default:
      return "Operasi tidak tersedia";
  }
}
alert(comparison(8, 9));
