// let btn = document.getElementById('btn');
// btn.addEventListener('click',clickEvent);
// btn.addEventListener('mousedown',mdEvent);
// btn.addEventListener('dblclick',dbclickEvent);

// function clickEvent(e) {
//   console.log("Thanks you so mouch",e);
//   e.preventDefault();
// }
// function dbclickEvent(e) {
//   console.log("Thanks is dubble click",e);
//   e.preventDefault();
// }
// function mdEvent(e) {
//   console.log("Thanks is dubble click",e);
//   e.preventDefault();
// }


// document.querySelector('#heading').addEventListener('mouseenter',function(e) {
//   console.log('Enter mouse');
// });


// document.querySelector('#heading').addEventListener('mouseleave',function(e) {
//   console.log('Exit Mose');
// });



document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})
