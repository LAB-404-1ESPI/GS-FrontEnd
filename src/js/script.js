const header = document.querySelector('header');
 
window.addEventListener('scroll', () => {
 
    if (window.scrollY > 20) {
        header.classList.add('rolado');
    } else {
        header.classList.remove('rolado');
    }
});
 
/* botão missão */
 
const btnMissao = document.getElementById("btnMissao");
 
btnMissao.addEventListener("click", function(event) {
 
    event.preventDefault();
 
    const elemento = document.getElementById("cor1");
 
    window.scrollTo({
        top: elemento.offsetTop - 100,
        behavior: "smooth"
    });
 
});
 
/* MENU */
 
const menuIcone = document.getElementById("menu-icone");
const menuOverlay = document.getElementById("menuOverlay");
const fecharMenu = document.getElementById("fecharMenu");
 
menuIcone.addEventListener("click", () => {
    menuOverlay.classList.add("ativo");
});
 
fecharMenu.addEventListener("click", () => {
    menuOverlay.classList.remove("ativo");
});
 
/* links */
 
document.querySelectorAll(".menu-item").forEach(link => {
 
    link.addEventListener("click", function(e){
 
        e.preventDefault();
 
        const alvo = document.querySelector(
            this.getAttribute("href")
        );
 
        window.scrollTo({
            top: alvo.offsetTop - 100,
            behavior: "smooth"
        });
 
        menuOverlay.classList.remove("ativo");
    });
 
});
 