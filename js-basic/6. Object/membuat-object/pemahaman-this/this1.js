// Membuat Object
// console.log(this); // di global object, this mengacu pada global object (window di browser, global di nodejs)

// Object Literal
let barang1 = {
  hello: function () {
    console.log(this);
    console.log("hello");
  },
};
barang1.hello();
// this pada Object Literal mengembalikan object itu sendiri (barang1);

// Function Declaration
function sayHello() {
  console.log("Say Hello");
}
sayHello();
// this pada Function Declaration mengembalikan global object (window di browser, global di nodejs)

// Constructor Function
function SayHello() {
  console.log("Say Hello from Constructor");
}
let obj1 = new SayHello();
// this pada Constructor Function mengembalikan object yang baru dibuat (instance dari Constructor Function), ketika menggunakan variabel.
