import Buku from "./Buku.mjs";
import User from "./User.mjs";
import Pinjam from "./Pinjam.mjs";
import UI from "./UI.mjs";
import Mahasiswa from "./Mahasiswa.mjs";
import Dosen from "./Dosen.mjs";

class UIUser extends UI {
  static displayUsers() {
    const users = User.getUsers();

    users.forEach((user) => UIUser.addUserToList(user));
  }

  static addUserToList(user) {
    const list = document.querySelector("#user-list");

    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${user.nim}</td>
            <td>${user.nama}</td>
            <td>${user.departemen}</td>
            <td>${user.status}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
            <td>${user.buku[0].judul}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector("#nim").value = "";
    document.querySelector("#nama").value = "";
    document.querySelector("#departemen").value = "";
    document.querySelector("#status").value = "Status";
    document.querySelector("#phone").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#isbn").value = "";
  }

  static eventUser() {
    // Event: Display User
    document.addEventListener("DOMContentLoaded", UIUser.displayUsers);

    // Event: Add User
    document.querySelector("#user-form").addEventListener("submit", (e) => {
      // Prevent submit aktual
      e.preventDefault();

      // Get nilai form
      const nim = document.querySelector("#nim").value;
      const nama = document.querySelector("#nama").value;
      const departemen = document.querySelector("#departemen").value;
      const status = document.querySelector("#status").value;
      const phone = document.querySelector("#phone").value;
      const email = document.querySelector("#email").value;
      const isbn = document.querySelector("#isbn").value;

      if (nim === "" || nama === "" || departemen === "" || phone === "" || email === "" || isbn === "") {
        UIUser.showAlert("Lengkapi semua data", "danger");
      } else {
        // Instatiate User

        // Cari Buku
        const found = Buku.findBook(isbn);

        if (found) {
          let user;

          if (status === "Mahasiswa") {
            user = new Mahasiswa(nim, nama, departemen, phone, email);
          } else {
            user = new Dosen(nim, nama, departemen, phone, email);
          }

          // Set Buku
          Pinjam.pinjamBook(user.buku, isbn);

          // Add User ke Store
          User.addUser(user);

          // Add User ke UI
          UIUser.addUserToList(user);

          // Show pesan sukses
          UIUser.showAlert("Peminjaman buku berhasil", "success");

          // Clear field
          UIUser.clearFields();
        } else {
          // Tampilkan pesan
          UIUser.showAlert("Buku tidak ditemukan", "danger");

          // Batalkan peminjaman
          User.removeUser(email);
        }
      }
    });

    //Event: Remove User
    document.querySelector("#user-list").addEventListener("click", (e) => {
      if (e.target.innerHTML === "X") {
        // Remove User dari UI
        UIUser.deleteData(e.target);

        // Remove User dari Store
        User.removeUser(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        // Kembalikan Buku
        Pinjam.kembalikanBook(e.target.parentElement.previousElementSibling.textContent);

        // Tampilkan pesan remove
        UIUser.showAlert("User dihapus", "success");
      }
    });

    //Event: Sort User
    document.querySelector("#user-head").addEventListener("click", (e) => {
      const sorted = User.sortUser(e.target.textContent.toLowerCase());

      document.querySelector("#user-list").innerHTML = "";

      sorted.forEach((user) => UIUser.addUserToList(user));
    });

    //Event: Search User
    document.querySelector("#search").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const find = document.querySelector("#search").value;

        if (find !== "") {
          const filter = User.filterUser(find);

          document.querySelector("#user-list").innerHTML = "";

          filter.forEach((user) => UIUser.addUserToList(user));
        } else {
          document.querySelector("#user-list").innerHTML = "";

          UIUser.displayUsers();
        }
      }
    });
  }
}

export default UIUser;
