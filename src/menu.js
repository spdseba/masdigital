const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navigation');

hamburger.addEventListener('click', ()=>{/**Agrega un escuchador de eventos */
    menu.classList.toggle("spread");/**A menu le agrega la clase spread o se la quita */
});

window.addEventListener('click', (e)=>{/**Agrega un escuchador de eventos */
    if(menu.classList.contains("spread")&& e.target != menu && e.target != hamburger){
        menu.classList.toggle("spread");
    }/**A menu le agrega la clase spread o se la quita */
})