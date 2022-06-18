import UIUser from "./model/UIUser.mjs";
import User from "./model/User.mjs"
UIUser.eventUser();

document.getElementById("btn-user").onclick = function () {
    location.href = "http://127.0.0.1:5500/html/User.html";
};

document.getElementById("btn-book").onclick = function () {
    location.href = "http://127.0.0.1:5500/html/Buku.html";
};