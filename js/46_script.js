console.log("Done");
// ============ Regular Expression ============
// 1: Basic function

//This is regular expression literal in js
let reg = /harry/; 
reg = /harry/g; // g = Globale Search
// reg = /harry/i; // i = Case insensitive
// console.log(reg);
// console.log(reg.source);

// ======== Function to match expression ========
let str = "This is greet code with harry and also harry";
//1. exec(); Tha function will return an array or null for no match 

let result = reg.exec(str);
// console.log(result);
// result = reg.exec(str);
if (result) {
// console.log(result);
// console.log(result.input);
// console.log(result.index);
// console.log(result.length);
}

//2. test() return true or false
let result2 = reg.test(str);
// console.log(result2);

//3. match() It will return an array or null
// let result3 = reg.match(str); ! This is Worng
let result3 = str.match(reg);
// console.log(result3);

//4. search() return index for first match else -1
// let result4 = reg.search(str); ! This is Worng 
let result4 = str.search(reg);
console.log(result4);

//5. replace()  return new replace string with all tha replacement 

let result5 = str.replace(reg,"Dhaval");
console.log(result5);