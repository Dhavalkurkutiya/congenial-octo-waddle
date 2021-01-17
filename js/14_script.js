/*
element selectors:
1. Single element selector
2. Multi element selector
*/

// 1. Single element selector
let element = document.getElementById('first');
// element = element.classList;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color = 'red';
// element.innerText = "DhavalKurkutiya";
element.innerHTML = '<i>DhavalKurkutiya</i>';
console.log(element);
// console.log(element.innerHTML);
// console.log(element.innerText);


let sel = document.querySelector("#first_1");
// sel = sel.style.color = 'red';
sel = sel.innerText = "Let's Play.";
console.log(sel);

// 2. Multi element selector
let ele = document.getElementsByClassName('color');
ele = document.getElementsByClassName('container');
ele = document.getElementsByTagName('a');
// console.log(ele[0].getElementsByClassName('child'));
console.log(ele);

for (let i = 0; i < ele.length; i++) {
  const element = ele[i]
 console.log(element); 
  element.style.color = 'red';
 
}

// Array.from(ele).forEach(function(element){
//   console.log(element);
//   element.style.color = 'red';
// })