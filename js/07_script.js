let marks = [34, 23, 24, 93, 73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23, 123, 21,'Orange');
console.log(marks);
console.log(mixed);
console.log(fruits[2]);

console.log(arr.length);
console.log(Array.isArray(arr)); //Check tha Array
arr[0] = "Dhaval";
console.log(arr);


console.log(marks);
let value = marks.indexOf(24);
console.log(value);

marks.push(628);
console.log(marks); //add tha numbar

marks.pop();
console.log(marks);// remove tha last element in array

marks.shift(); 
console.log(marks); //remove tha first element in array

marks.splice(2,3);
console.log(marks);

marks.reverse();
console.log(marks);

let marks2 = [2,4,2,4];
marks = marks.concat(marks2);
console.log(marks);

let myobj = {
      'first name': 'harry',
      channel: 'CodeWithHarry',
      isActive: true,
      marks: [1,
        5,
        3,
        6]
    }

    console.log(myobj)
    console.log(myobj['channel'])
    console.log(myobj.channel)