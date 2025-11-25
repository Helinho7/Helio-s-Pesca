const btnMobile = document.querySelector("#btn-mobile");
const menuMobile = document.querySelector("#menu-mobile");

btnMobile.addEventListener("click", () => {
    menuMobile.style.display =
        menuMobile.style.display === "block" ? "none" : "block";
});