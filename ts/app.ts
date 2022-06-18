// class Book {
//     private judul: string;
//     private kategori: string;
//     private penerbit: string;
//     private jmlHalaman: number;
//     private isbn: string;

//     constructor(judul: string, kategori: string, penerbit: string, jmlHalaman: number, isbn: string) {
//         this.judul = judul;
//         this.kategori = kategori;
//         this.penerbit = penerbit;
//         this.jmlHalaman = jmlHalaman;
//         this.isbn = isbn;
//     }
// }

// class UI {
//     displayBooks(): void {
//         const storedBook = [
//             {
//                 judul: 'Judul Buku A',
//                 kategori: 'Kategori A',
//                 penerbit: 'Penerbit A',
//                 jmlHalaman: 100,
//                 isbn: '1234'
//             },
//             {
//                 judul: 'Judul Buku B',
//                 kategori: 'Kategori B',
//                 penerbit: 'Penerbit B',
//                 jmlHalaman: 150,
//                 isbn: '5678'
//             }
//         ]

//         const books = storedBook;

//         books.forEach(book => UI.addBookToList(book));
//     }

//     addBookToList(book): void {
//         const list = document.querySelector('#book-list');

//         const row = document.createElement('tr');

//         row.innerHTML = `
//             <td>${book.judul}</td>
//             <td>${book.kategori}</td>
//             <td>${book.penerbit}</td>
//             <td>${book.jmlHalaman}</td>
//             <td>${book.isbn}</td>
//             <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
//         `

//         list.appendChild(row);
//     }
// }

// document.addEventListener('DOMContentLoaded', UI.displayBooks);

// export default Book;