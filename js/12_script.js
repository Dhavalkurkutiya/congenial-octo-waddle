console.log('welcome');
let a = document;
a = document.all;
a = document.body;
a = document.links;
a = document.links[0].href;
// a = document.images;
// a = document.scripts[0].src;
console.log(a);

Array.from(a).forEach(function(element,length,array){
  console.log(element,length,array);
})
