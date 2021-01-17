class Library {
  constructor(bookList) {
    this.bookList = bookList;
    this.issuedBooks = {};
  }

  getBookList() {
    this.bookList.forEach(element => {
      console.log(element);
    });
  }
  issueBook(bookname, user) {
    if (this.issuedBooks[bookname] == undefined) {
      this.issuedBooks[bookname] = user;
    }
    else {
      console.log("This book is already issued!");
    }
  }

  returnBook(bookname) {
    delete this.issuedBooks[bookname];
  }
}

harry = new Library(['Harry Book1', 'Dhaval Book2','Good Book3']);
harry.getBookList();
harry.issueBook('Dhaval Book2','root');
harry.issueBook('Harry Book1','root');
harry.issueBook('Harry Book1','root');
harry.returnBook('Dhaval Book2');
// console.log(harry);