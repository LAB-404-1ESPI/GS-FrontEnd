const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 20) {
        header.classList.add('rolado'); 
    } else {
        header.classList.remove('rolado'); 
    }
});

const btnMissao = document.getElementById("btn-missao");

btnMissao.addEventListener("click", function(event) {
    event.preventDefault();

    const elemento = document.getElementById("cor1");

    window.scrollTo({
        top: elemento.offsetTop - 100,
        behavior: "smooth"
    });
});
