class UI {

    static deleteData(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container-fluid');
        const row = document.querySelector('.row');
        container.insertBefore(div, row);

        // Bersihkan dalam 3 detik
        setTimeout(() => document.querySelector('.alert').remove(), 2000)
    }
}

export default UI;