const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 20) {
        header.classList.add('rolado'); 
    } else {
        header.classList.remove('rolado'); 
    }
});
