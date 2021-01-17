let whiteBoxes = document.getElementsByClassName('whiteBox');
let imgBox = document.querySelector('.imgBox');

imgBox.addEventListener('dragstart', (e)=> {
  console.log("Start with Drag");
  e.target.className += ' hold';
  setTimeout(function() {
    e.target.className = ' hide';
  }, 0);
});

imgBox.addEventListener('dragend', ()=> {
  console.log("Emd withDrag");
});

for (let whiteBox of whiteBoxes) {
  whiteBox.addEventListener('dragover', (e)=> {
    e.preventDefault();
    console.log("Welcome dragover");
  });

  whiteBox.addEventListener('dragenter', ()=> {
    console.log("Welcome dragenter");
  });

  whiteBox.addEventListener('dragleave', ()=> {
    console.log("Welcome dragleave");
  });

  whiteBox.addEventListener('dragover', ()=> {
    console.log("Welcome dragover");
  });

  whiteBox.addEventListener('drop', ()=> {
    console.log("Welcome drop");
  });
}