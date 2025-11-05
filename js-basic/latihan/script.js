let ulang = true;
while (ulang) {
  for (let i = 3; i > 0; i--) {
    // menentukan pilihan player -> angka random antara 1-10
    let player = parseInt(prompt(`Pilih angka antara 1-10: \nKamu memiliki ${i} kesempatan`));

    // menentukan pilihan komputer
    let comp = Math.floor(Math.random() * 10) + 1;

    // menentukan pemilihan player vs komputer
    if (player < comp) {
      alert("Nilai kamu terlalu rendah");
    } else if (player > comp) {
      alert("Nilai kamu terlalu tinggi");
    } else if (player == comp) {
      alert("Nilai yang sama");
      let lanjut = confirm("Masih mau lanjut?");
      if (lanjut == false) {
        break;
      }
    } else {
      alert("Input tidak valid");
    }
    if (i === 1) {
      alert(`Hasil comp : ${comp}`);
    }
  }
  ulang = confirm("Lagi?");
}
