class Library {
  constructor(book1,book2,book3,book4,book5) {
    this.book1 = book1
    this.book2 = book2
    this.book3 = book3
    this.book4 = book4
    this.book5 = book5
  }
}


harry = new Library("book1","book2","book3","book4","book5");
console.log(harry.getBookList());
