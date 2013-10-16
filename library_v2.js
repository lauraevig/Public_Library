
//Book Class
function Book (title, author, enshelf, unshelf) {
    this.title = title;
    this.author = author;
    this.enshelf = enshelf;
    this.unshelf = unshelf;
    this.shelfLoc = shelfLoc;
}

var brave = new book("Brave New Work", "Aldous Huxley", true, false, 1);
var wuthering = new book("Wuthering Heights", "Emily Bronte", false, true, 2);
var stranger = new book("The Stranger", "Albert Camus", true, false, 1);
var odyssey = new book("Odyssey", "Homer", true, false, 3);

var bookCatalog = [brave, wuthering, stranger, odyssey]

//example book output
document.write(brave.enshelf, brave.shelfLoc);

//Shelf Class
function shelf (type, number) {
    this.type = type;
    this.number = number;
}

var shelf1 = new Shelf ("A-L fiction", "1")
var shelf2 = new Shelf ("M-Z fiction", "2")
var shelf3 = new Shelf ("non-fiction", "3")

var shelfNum = [shelf1, shelf2, shelf3];

//Library Class
myLibrary.NumShelf = 3
myLibrary.Name= "Public Library"

