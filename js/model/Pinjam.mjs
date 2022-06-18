import Buku from "./Buku.mjs";

class Pinjam {

    static pinjamBook(userBuku, isbn) {
        const books = Buku.getBooks();

        books.forEach((book) => {
            if(book.isbn === isbn) {
                userBuku.push(book);

                book.stok = parseInt(book.stok) - 1;
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }

    static kembalikanBook(judulBook) {
        const books = Buku.getBooks();

        books.forEach((book) => {
            if(book.judul === judulBook) {
                book.stok = parseInt(book.stok) + 1;
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

export default Pinjam;