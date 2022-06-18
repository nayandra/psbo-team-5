import User from "./User.mjs";

class Dosen extends User {
    status;

    constructor(nim, nama, departemen, phone, email) {
        super(nim, nama, departemen, phone, email);
        this.status = 'dosen';
    }
}

export default Dosen;