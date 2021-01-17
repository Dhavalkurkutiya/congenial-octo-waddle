let people = ['Dhaval', 'Abhay', 'Bargav', 'Vivek', 'Rahul', 'Nikita', 'Bavini', 'Aniket', 'krunal', 'Nikhil'];
console.log(people);


// ***************** For In Loop ***************** 

/* Traditional for Loopn*/
// for (let index = 0; index < people.length; index++) {
//  const element = people[index];
//   console.log(element);
// }

//[1.] ITERATING AN OBJECT
let obj = {
  name: "Dhavalkurkutiya",
  agr: 23,
  sub: "Cyber Aramy",
  lenguage: "Javascript"
};
// console.log(obj);
//[1.1] Iterating an Object using Traditional for Loopn
// for (let index = 0; index < Object.keys(obj).length; index++) {
//   const element = obj[Object.keys(obj)[index]];
//   console.log(element);
// }

//[1.2] Iterating an Object to  for-in  Loop
for (let key in obj){
  // console.log(obj[key]);
}

// 2.  ITERATING A STRING 
let str = "Dhavalkurkutiya is good boy.";
for(char in str){
  // console.log(str[char]);
}


// ***************** For Of Loop ***************** 
people = ['Dhaval', 'Abhay', 'Bargav', 'Vivek', 'Rahul', 'Nikita', 'Bavini', 'Aniket', 'krunal', 'Nikhil'];

for(let name of people){
  console.log(name);
}

for(let name of str){
  console.log(name);
}

let element = document.getElementsByTagName('li');
for(let li of element){
  console.log(li);
}
