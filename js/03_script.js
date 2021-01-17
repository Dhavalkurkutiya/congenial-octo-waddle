console.log("03_Varible & let & const");
// Start
// Rules for creating JavaScript Variables
/*
     1. Cannot start with numbers
     2. Can start with letter, numbers, _ or $
     3. Are case sensitive
*/

var name = 'Dhaval';
console.log(name);

var a = 3; // Globle Levele  Scope
let b = 5; // Local Varible Scope
const c = 8; // Can't Not Chang This Value

{
  let name = "Hiren"; // Not Presant to Chack Global Levale Scope
  console.log(name);
}

const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//arry = [12];
arry.push(11);
console.table(arry);
/* Most common programming case types:
      1. camelCase
      2. kebab-case
      3. snake_case
      4. PascalCase
    */
//End