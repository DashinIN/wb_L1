// 12.	Задача на работу с объектами: создайте объект, представляющий собой книгу. Объект должен иметь свойства,
//  такие как: название книги, автор и год издания. Напишите методы для получения и изменения значений свойств книги.

const book = {
   title: "Название книги",
   author: "Автор",
   year: 2023,
   
   // Методы для получения значений свойств книги
   getTitle: function() {
      return this.title;
   },
   
   getAuthor: function() {
      return this.author;
   },
   
   getYear: function() {
      return this.year;
   },
   
   // Методы для изменения значений свойств книги
   setTitle: function(newTitle) {
      this.title = newTitle;
   },
   
   setAuthor: function(newAuthor) {
      this.author = newAuthor;
   },
   
   setYear: function(newYear) {
      this.year = newYear;
   }
};

// Получение значений свойств книги
console.log(book.getTitle()); // Выводит "Название книги"
console.log(book.getAuthor()); // Выводит "Автор"
console.log(book.getYear()); // Выводит 2023

// Изменение значений свойств книги
book.setTitle("Новое название книги");
book.setAuthor("Новый автор");
book.setYear(2024);

console.log(book.getTitle()); // Выводит "Новое название книги"
console.log(book.getAuthor()); // Выводит "Новый автор"
console.log(book.getYear()); // Выводит 2024