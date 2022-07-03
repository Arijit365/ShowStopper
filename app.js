// editing responsive hamburger menu with scss and adjusting nav items

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active'); 
};
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    menu.classList.remove('active')
}



