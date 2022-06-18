class User {
  buku = [];

  constructor(nim, nama, departemen, phone, email) {
    this.nim = nim;
    this.nama = nama;
    this.departemen = departemen;
    this.phone = phone;
    this.email = email;
  }

  static getUsers() {
    let users;
    if (localStorage.getItem("users") === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("users"));
    }

    return users;
  }

  static addUser(user) {
    const users = User.getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }

  static removeUser(email) {
    const users = User.getUsers();

    users.forEach((user, index) => {
      if (user.email === email) {
        users.splice(index, 1);
      }
    });

    localStorage.setItem("users", JSON.stringify(users));
  }

  static filterUser(find) {
    const users = User.getUsers();

    const list = users.filter((user) => {
      return user.nim === find || user.nama === find || user.departemen === find || user.status === find || user.phone === find || user.email === find || user.buku[0].judul === find;
    });

    return list;
  }

  static sortUser(prop) {
    const users = User.getUsers();

    let sorted = users.sort((data1, data2) => {
      return data1[prop] < data2[prop] ? -1 : data1[prop] > data2[prop] ? 1 : 0;
    });

    return sorted;
  }
}

export default User;
