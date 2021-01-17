const name = "Dhavalkurkutiya";
const gratimg = "Good Morning";
console.log(name + ' ' + gratimg);

let html = "External stylesheets are considered the best way to handle your CSS. There's a very";
html = html.concat('this',' welcome');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

// String Indexsing
console.log(html[2]);
console.log(html.indexOf('CSS')); // Search index Numbar Starting
console.log(html.lastIndexOf('a')); // Search index Numbar Ending
console.log(html.charAt(5)); 
console.log(html.endsWith('very')); 
console.log(html.includes('are')); 
console.warn(html.substring(0,12));
console.log(html.slice(2,6));
console.table(html.split(' ')); //Return this array
console.log(html.replace('are' , 'Dhavalkurkutiya'));


let name1 = 'Dhavalkurkutiya';
let age = 17;
let myHtml = `<p>My Name is ${name}.<p2> <p>My age is ${age}.`
// document.body.innerHTML = myHtml;