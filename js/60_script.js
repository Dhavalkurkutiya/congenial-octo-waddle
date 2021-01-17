let a, b;
// [a,b] = [12,23];
// console.log(a,b);

// Array Destructuing
[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 14, 14.15];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


({ a, b, c, ...d } = { a: 1, b: 2, c: 3, d: 4, e: 5 });
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

const fruts = ['Apple', 'Bananna', 'Mangos'];
[a, b, c] = fruts;
console.log(a, b, c);

// Object Destructuing
const leptop = {
  name: "HP Privlen",
  age: "27 days",
  gender: "Male",
  net: 1222,
  start: function() {
    console.log("started");
  }
}

const {name,age,gender,net,start} = leptop;
console.log(name,age,gender,net,start);
start();