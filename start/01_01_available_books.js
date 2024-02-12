// Write your code here
class Book {
  constructor (title, author, ISBN, numCopies=1){
    this.title=title;
    this.author=author;
    this.ISBN=ISBN;
    this.numCopies=numCopies;
  }
  get availability(){
    return this.getAvailability();
  }

  getAvailability(){
    if (this.numCopies===0){
      return "out of stock"}
    else if (this.numCopies<10){
      return "low stock"
    }
    else {
      return "in stock"
    }
    }

  sell(numSold=1){
    this.numCopies=this.numCopies-numSold;
  }

  restock(numCopies=5){
    this.numCopies=this.numCopies+numCopies;
  }
}

const newBook = new Book('tiny beautiful things', 'cheryl strayed', '978-0-593-68521-1', 15)

console.log(newBook.getAvailability)
newBook.sell(10)
console.log("Sold 10 copies, ", newBook.getAvailability)
newBook.restock(6)
console.log("Restock 6 copies, ", newBook.getAvailability)

