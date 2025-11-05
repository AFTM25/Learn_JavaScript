let a = 20;
let b = true;
let newValueA;
while (b === true) {
  let user = confirm(`Angka saat ini adalah ${a}. Apakah anda ingin mengganti? (y/n) : `);
  if (user === true) {
    newValueA = prompt("Masukkan angka nya : ");
    a = newValueA;
    alert(`Angka sudah diubah menjadi ${a}`);
  }

  b = confirm(`Program lanjut? : `);
}

alert("Angka saat ini adalah " + a);
