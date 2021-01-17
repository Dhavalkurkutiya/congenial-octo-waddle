// Consttructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// Display Consttructor
function Display() {}

// Add Method to Display Prototype
Display.prototype.add = function(book) {
  console.log("adding tomui");
  tableBody = document.getElementById('tableBody');

  let uiString = `<tr>
  <td>${book.name}</td>
  <td>${book.author}</td>
  <td>${book.type}</td>
  </tr>
  `;

  tableBody.innerHTML += uiString;
}

// implements tha clear function
Display.prototype.clear = function() {
  let libraryForm = document.getElementById('libraryForm');
  libraryForm.reset();
}

// Implements tha validate function
Display.prototype.validate = function(book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
}

Display.prototype.show = function(type, displayMessage) {
  let message = document.getElementById('message');
  message.innerHTML = `
  <div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message:</strong> ${displayMessage}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
  </button>
  </div>
  `;
  setTimeout(function() {
    message.innerHTML = '';
  }, 2000);
}
// Add Submit EventListener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("This is submit from");

  let name = document.getElementById('bookName').value;
  let author = document.getElementById('Author').value;
  let type;

  let fiction = document.getElementById('fiction');
  let programing = document.getElementById('programing');
  let cyberSecurity = document.getElementById('cyberSecurity');

  if (fiction.checked) {
    type = fiction.value;
  } else if (programing.checked) {
    type = programing.value;
  } else if (cyberSecurity.checked) {
    type = cyberSecurity.value;
  }
  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();

  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show('success', 'youer book hase ben successfully added');
  } else {
    // show error to user
    display.show('danger', 'sorry cant not add this book')
  }
  e.preventDefault();

}
 
 
