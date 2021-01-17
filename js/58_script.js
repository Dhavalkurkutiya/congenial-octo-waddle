console.log('Done');

// Set stored unique value
const mySet = new Set();
console.log('This set look like ', mySet);

// Adding to set value
mySet.add('look');
mySet.add('like');
mySet.add('you');
mySet.add('love');
mySet.add('love You');
mySet.add(89);
mySet.add(true);
mySet.add(false);
console.log('This set look like this', mySet);

// Use a contractor to  inittialize tha set
let mySet2 = new Set([1,2,3,'this','that',{name:'dhaval'}]);
console.log("New set", mySet2); // Check tha set size

console.log(mySet.size);// Check size for set

console.log(mySet.has(89)); // Check tha value of tha set

console.log('!Before removimg set' , mySet.has('love'));

mySet.delete('love'); // Removimg set element

console.log('!After removimg set' , mySet.has('love'));

// Itrerating tha set
// for(let item of mySet){
//   console.log('Item is ;' , item);
// }

mySet.forEach((item)=>{
  console.log("Item is : " , item);
});

// convert set inti arry
let arry = Array.from(mySet);
console.log(arry);

