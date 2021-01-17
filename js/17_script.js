console.log("Js");

document.getElementById('heading').addEventListener('click',function(e){
  let varEvent;
  varEvent = e.target;
  varEvent = e.target.className;
  varEvent = e.target.classList;
  varEvent = e.target.id;
  varEvent = Array.from(e.target.classList);
  varEvent = e.offsetX;
  varEvent = e.offsetY;
  varEvent = e.clientX;
  varEvent = e.clientY;
  console.log(varEvent);
  console.log('You have click heading');
});