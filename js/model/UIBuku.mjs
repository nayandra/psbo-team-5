import Buku from "./Buku.mjs";
import UI from "./UI.mjs";

class UIBuku extends UI {
  static displayBooks() {
    const books = Buku.getBooks();

    books.forEach((book) => UIBuku.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${book.judul}</td>
            <td>${book.kategori}</td>
            <td>${book.penerbit}</td>
            <td>${book.jmlHalaman}</td>
            <td>${book.stok}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector("#judul").value = "";
    document.querySelector("#kategori").value = "";
    document.querySelector("#penerbit").value = "";
    document.querySelector("#jmlHalaman").value = "";
    document.querySelector("#stok").value = "";
    document.querySelector("#isbn").value = "";
  }

  static eventBook() {
    // Event: Display Buku
    document.addEventListener("DOMContentLoaded", UIBuku.displayBooks);

    // Event: Add Buku
    document.querySelector("#book-form").addEventListener("submit", (e) => {
      // Prevent submit aktual
      e.preventDefault();

      // Get nilai form
      const judul = document.querySelector("#judul").value;
      const kategori = document.querySelector("#kategori").value;
      const penerbit = document.querySelector("#penerbit").value;
      const jmlHalaman = document.querySelector("#jmlHalaman").value;
      const stok = document.querySelector("#stok").value;
      const isbn = document.querySelector("#isbn").value;

      // Validasi
      if (judul === "" || kategori === "" || penerbit === "" || jmlHalaman === "" || isbn === "") {
        UIBuku.showAlert("Lengkapi semua data", "danger");
      } else {
        // Instatiate Buku
        const book = new Buku(judul, kategori, penerbit, jmlHalaman, stok, isbn);

        // Add buku ke UIBuku
        UIBuku.addBookToList(book);

        // Add buku ke store
        Buku.addBook(book);

        // Tampilkan pesan sukses
        UIBuku.showAlert("Buku ditambahkan", "success");

        // Clear field
        UIBuku.clearFields();
      }
    });

    // Event: Remove Buku
    document.querySelector("#book-list").addEventListener("click", (e) => {
      if (e.target.innerHTML === "X") {
        // Remove buku dari UIBuku
        UIBuku.deleteData(e.target);

        // Remove buku dari store
        Buku.removeBook(e.target.parentElement.previousElementSibling.textContent);

        // Tampilkan pesan remove
        UIBuku.showAlert("Buku dikembalikan", "success");
      } 
    });

    //Event: Sort User
    document.querySelector("#book-head").addEventListener("click", (e) => {
      const sorted = Buku.sortBook(e.target.textContent.toLowerCase());

      document.querySelector("#book-list").innerHTML = "";

      sorted.forEach((book) => UIBuku.addBookToList(book));
    });

    //Event: Search User
    document.querySelector("#search").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const find = document.querySelector("#search").value;

        if (find !== "") {
          const filter = Buku.filterBook(find);

          document.querySelector("#book-list").innerHTML = "";

          filter.forEach((book) => UIBuku.addBookToList(book));
        } else {
          document.querySelector("#book-list").innerHTML = "";

          UIBuku.displayBooks();
        }
      }
    });
  }
}

export default UIBuku;
