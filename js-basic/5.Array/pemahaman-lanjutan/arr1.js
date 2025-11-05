function jumlahkan(arr) {
  let hasil = 0;
  for (let i = 0; i < arr.length; i++) {
    hasil += arr[i];
  }
  return hasil;
}

function tampilArr(arr) {
  arr.forEach((e) => console.log(e));
}
