function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleNightMode(){
    const nighticon =  document.querySelector(".logo");
    nighticon.body.classList.toggle(".dark-theme");
}