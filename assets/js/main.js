console.log("main.js added");

const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const nav = document.getElementById("mainMenu");

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

function openMenu() {
    nav.classList.remove("hidden");
    nav.classList.add("shown");

    openBtn.classList.remove("shown");
    openBtn.classList.add("hidden");
}

function closeMenu() {
    nav.classList.remove("shown");
    nav.classList.add("hidden");

    openBtn.classList.remove("hidden");
    openBtn.classList.add("shown");
}

