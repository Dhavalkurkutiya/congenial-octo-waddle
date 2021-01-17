console.log("This is tutorial 59");
// Symbols
let sym1 = Symbol('My identify fire');
let sym2 = Symbol('My identify fire');
// console.log("Symbol is: ",sym1);
// console.log("Symbol is type: ", typeof sym1);

console.log(sym1 === sym2);

const a = "this is";
const b = "this is";

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);


const k1 = Symbol('identifier for k1');
const k2 = Symbol('for k2');

myObj = {};
myObj[k1] = "FACEBOOL";
myObj[k2] = "GOOGLE";
myObj["name"] = "DHAVAL_KURKUTIYA";
myObj[4] = "AGE";


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
// console.log(myObj.k2); // !! ALERT !!: cannot do this to get Rohan because it is same as myObj["k2"]



// Symbols are ignored in for in loop
for(let key in myObj){
  console.log(key,myObj[key]);
}

console.log(JSON.stringify(myObj));