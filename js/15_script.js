let cont  = document.querySelector('.cont');
cont = document.querySelector('.container');
console.log(cont.childNodes);// print cooment,text and spce
console.log(cont.children); // No print Comments,text

let nodeName = cont.childNodes[0].nodeName;
// console.log(nodeName);
let nodeType = cont.childNodes[4].nodeType;
// console.log(nodeType);

/* Node types */
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType


let container = document.querySelector('div.container');
// console.log(container.children);
// console.log(container.children[0].children);
// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount); //Count of child Element

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);