// Create a new element
let createEle = document.createElement('div');

// Add text to that created element
let val = localStorage.getItem('text');
let text;
if (val == null) {
  text = document.createTextNode('Hii I am Don');
} else {
  text = document.createTextNode(val);
}
createEle.appendChild(text);
// Give element id, style and class
createEle.setAttribute('id', 'elem');
createEle.setAttribute('class', 'divEdit');

// Grab the main container
let mainContainer = document.querySelector('.mainContainer');
let socialLink = document.querySelector('.socialLink');

// Insert the element before element with id first
mainContainer.insertBefore(createEle, socialLink);

createEle.addEventListener('click', function(e) {
  let noTextAtrea = document.getElementsByClassName('textArea').length;
  if (noTextAtrea == 0) {

    let html = elem.innerHTML;
    createEle.innerHTML = `<textarea class="textArea" name="textArea" id="textArea" rows="13" cols="60">${html}</textarea>`;
  }
  let textArea = document.getElementById('textArea');
  textArea.addEventListener('blur', function(e) {
    elem.innerHTML = textArea.value;
    localStorage.setItem('text', textArea.value);
  })
})