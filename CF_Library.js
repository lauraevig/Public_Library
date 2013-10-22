<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Code Fellows Library</title>
        <script type="text/javasctipt">
        /* Use object-oriented JavaScript to model a public library (w/ three classes: Library, Shelf, & Book). The library should be aware of a number of shelves. Each shelf should know what books it contains. Make the book object have "enshelf" and "unshelf" methods that control what shelf the book is sitting on. The library should have a method to report all books it contains. */
        
        //Book Class (Constructor)
        function Book(title, author) {
            this.title = title;
            this.author = author;
              //attach the enshelf function to the shelf
            this.enshelf = function (shelf) {
              //ADD Shelf - http://www.w3schools.com/jquery/html_append.asp
              shelf.books.append(this);
            }
            this.unshelf = function (shelf) {
              //need to remove this from shelf.books - **not sure how to do this? 
            }
        }
        
        //Shelf Class
        function Shelf () {
          // link books to shelf
          //Dale's example
          this.books = []; 
        // javascript arrays - http://www.w3schools.com/jsref/jsref_indexof_array.asp
          this.containsBook = function (book) {
              //function to tell if book is present
              //if the position of a book is not -1, it means it is present since in JS, 0 is the start position
              if(this.books.indexOf(book) != -1) {
              return true;
            }
            else {
              return false;
            }
          }
        }
        
        //Library Class
        function Library () {
          this.shelves = [];
          this.addShelf = function (shelf) {
             this.shelves.append(shelf);
            };
           this.numShelves = function () { 
               return this.shelves.length; 
           };
            // not sure how to add total # of books
        };
                        
        //Which books go on/off of which shelf?
        var brave = new book("Brave New World", "Aldous Huxley");
        var shelfTwo = new Shelf ();
        brave.enshelf(shelfTwo);
                
        var wuthering = new book("Wuthering Heights", "Emily Bronte");
        var shelfOne - new Shelf ();
        wuthering.enshelf(shelfOne);
                
        var stranger = new book("The Stranger", "Albert Camus");
        var shelfOne - new Shelf ();
        wuthering.unshelf(shelfOne);
        
        var odyssey = new book("Odyssey", "Homer");
        var shelfThree - new Shelf ();
        wuthering.enshelf(shelfThree);
        
        //Add shelves to Library! Yay!
        var publicLibrary = new Library ();
        publicLibrary.addShelf(shelfOne, shelfTwo, shelfThree);
        
        </script>
    </head>
    <body>
            //Start of return from Dale's example on GitHub js-basics ... not sure how to link Shelves to write
            <script type ="text/javascript">
                document.write('The book:' + brave.book + 'by' + brave.author + '<br>'); 
                document.write('The book:' + stranger.book + 'by' + stranger.author + '<br>'); 
            </script>
    </body>
</html>
