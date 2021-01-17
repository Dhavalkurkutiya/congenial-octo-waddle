/*
 * Creating Elements and Add classList and Id.
 *
 */

let createElement = document.createElement('div')
let createTextNode = document.createTextNode('Child-6 Created by [DhavalKurkutiya]');
let appendContainer = document.querySelector('.container');

createElement.appendChild(createTextNode);
createElement.classList = 'color';
createElement.id = 'newId';
createElement.setAttribute('title', 'text');
// createElement.innerHTML = '<i>DhavalKurkutiya</i>';
// createElement.innerText = 'DhavalKurkutiya';
appendContainer.appendChild(createElement);
console.log(createElement);



/*
 * Remove Elements and More...!
 *
 */

let heading = document.createElement('a');
let appendHeading = document.querySelector('.socialLinks');
heading.innerText = 'My Name is Heading';
heading.className = 'socialLinks';
heading.id = 'link';
appendHeading.appendChild(heading);
// createElement.replaceWith(heading);
// createElement.replaceWith(createElement,document.querySelector('a'))
console.log(heading);


 /*
 * 
 * Check id and class Present.
 * 
 */
let present = document.querySelector('.socialLinks');
// present.removeChild(document.getElementById('bing'))
present.getAttribute('class');
present.hasAttribute('class');
console.log(present);