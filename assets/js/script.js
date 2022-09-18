
// Menu show
const buttonMenu = document.querySelector('.navbar_button');
buttonMenu.addEventListener('click', showMenu);
buttonMenu.addEventListener('touchstart', showMenu);
var menuContainer = document.getElementById('menu-container');

function showMenu(e){
    if(e.type === 'touchstart') e.preventDefault();
    buttonMenu.classList.toggle('active');
    menuContainer.classList.toggle('active');
    document.body.classList.toggle('overflow');
}

function closeMenu(){
    document.body.classList.remove('overflow');
    buttonMenu.classList.remove('active');
    menuContainer.classList.remove('active');

}



// Dropdown menu
function changeDropdown(){
    let icon = document.getElementById('icon-dropdown');
    icon.classList.toggle("fa-angle-down");
    let dropdownContainer = document.querySelector('.dropdown-container');
    dropdownContainer.classList.toggle('active');
}

// Dark-mode
const darkMode = document.getElementById('button-darkmode');
darkMode.addEventListener('click', () => {
    let state = document.getElementById('state-mode');
    let iconState = document.getElementById('icon-state');
    document.body.classList.toggle("dark-mode");

    if(document.body.classList == "dark-mode" || document.body.classList == "overflow dark-mode"){
        state.innerText = "Modo claro";
        iconState.classList.replace('fa-moon', 'fa-sun');
    } else{
        iconState.classList.replace('fa-sun', 'fa-moon');
        state.innerText = "Modo escuro";
    }
})

// Search container show
const buttonSearch = document.getElementById('button-search');
buttonSearch.addEventListener('click', () =>{
    let searchContainer = document.getElementById('search-container');
    searchContainer.classList.add('active');
    document.body.classList.add('overflow');
})

const buttonCloseSearch = document.getElementById('button-close-search');
buttonCloseSearch.addEventListener('click', () =>{
    let searchContainer = document.getElementById('search-container');
    searchContainer.classList.remove('active');
    document.body.classList.remove('overflow');
})

// Carousel

let slide_index = 1;

show_slide(slide_index);

function next_slide(n){
    show_slide(slide_index += n);
}

function current_slide(n){
    show_slide(slide_index = n);
}

function show_slide(n){

    let i;
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');

    if(n > slides.length) slide_index = 1;
    if(n < 1) slide_index = slides.length;

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slide_index - 1].style.display = "block";
    dots[slide_index - 1].className += " active";

}