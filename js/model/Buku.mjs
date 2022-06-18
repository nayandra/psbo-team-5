import UIBuku from "./UIBuku.mjs";

class Buku {
  constructor(judul, kategori, penerbit, jmlHalaman, stok, isbn) {
    this.judul = judul;
    this.kategori = kategori;
    this.penerbit = penerbit;
    this.jmlHalaman = jmlHalaman;
    this.stok = stok;
    this.isbn = isbn;
  }

  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static addBook(book) {
    const books = Buku.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Buku.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }

  static findBook(isbn) {
    const books = Buku.getBooks();

    const found = books.some((book) => book.isbn === isbn);

    return found;
  }

  static filterBook(find) {
    const books = Buku.getBooks();

    const list = books.filter((book) => {
      return book.judul === find || book.kategori === find || book.penerbit === find || book.jmlHalaman === find || book.stok === parseInt(find) || book.isbn === find;
    });

    return list;
  }

  static sortBook(prop) {
    const books = Buku.getBooks();

    let sorted = books.sort((data1, data2) => {
      return data1[prop] < data2[prop] ? -1 : data1[prop] > data2[prop] ? 1 : 0;
    });

    return sorted;
  }
}

export default Buku;
