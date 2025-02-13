document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector(".hamburguer");
    const nav = document.querySelector(".cabecalho__menu");
    
    hamburguer.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});
