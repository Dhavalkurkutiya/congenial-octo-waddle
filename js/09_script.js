
let a = 5;
a +=1;
a++;
console.log(a);


// For Loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}


// While Loop
let j = 0;
while (j<5) {
console.log(j);
j+=1;
}

// Do While Loop
let k = 0;
do {
  if (k===4 || k===7) {
    k+=1;
    continue;
  }
  console.log(k);
  k++;
} while(k<=10);


//Fore Each
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr.forEach(function(element,index,array){ // (Recomanded)
  console.log(element,index,array);
});


for (var i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}


let obj = {
  name: "Rohan Das",
  age: 78,
  type: "Dangerous Programmer",
  os: "Ubuntu"
}
for (let key in obj) {
  console.log(`The ${key} of object is ${obj[key]}`)
}