let fruits = ["aples", "cherry", "banana", "watermelon"];
fruits.splice(2, 0, "manggis", "orange");
console.log(fruits.join(" # "));

fruits.splice(4, 1);
console.log(fruits.join(" ? "));

let fruits2 = fruits.slice(3, 6);
console.log(fruits2.join(" "));

fruits.forEach(function (nameFruit, no) {
  console.log(`${no + 1}. ${nameFruit}`);
});

fruits.splice(0, 1, "apel");
fruits.splice(1, 1, "ceri");
fruits.splice(3, 1, "jeruk");
fruits.splice(4, 1, "semangka");

let printFruit = fruits.map(function (nameFruit) {
  return nameFruit;
});
console.log(printFruit.join(" / "));

fruits.sort();
printFruit = fruits.map(function (name) {
  return name;
});
console.log(printFruit.join(" - "));

console.log("\n\n\n");

let num = [9, 4, 9, 3, 1, 4, 7, 71];
num.map(function (printNum) {
  return printNum;
});
console.log(num.join(" ~ "));

num.sort(function (a, b) {
  return a - b;
});
console.log(num.join(" ~ "));
