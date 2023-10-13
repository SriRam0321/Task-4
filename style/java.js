
   class Book {
     constructor(title, author, publicationYear) {
       this.title = title;
       this.author = author;
       this.publicationYear = publicationYear;
     }

     displayDetails() {
       document.write(`<br> Title: ${this.title}`);
       document.write(`<br> Author: ${this.author}`);
       document.write(`<br> Publication Year: ${this.publicationYear}`);
     }
   }

   class Ebook extends Book {
     constructor(title, author, publicationYear, price) {
       super(title, author, publicationYear);
       this.price = price;
     }

     displayDetails() {
       super.displayDetails();
       document.write(` <br> Price: ${this.price}`);
     }
   }

   let myEbook = new Ebook("JavaScript Programming", "John Doe", 2022, "500 Rs");
   myEbook.displayDetails();

