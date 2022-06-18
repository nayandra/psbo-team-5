import User from "./User.mjs"

class Mahasiswa extends User {
    status;

    constructor(nim, nama, departemen, phone, email) {
        super(nim, nama, departemen, phone, email);
        this.status = 'mahasiswa'
    }
}

export default Mahasiswa