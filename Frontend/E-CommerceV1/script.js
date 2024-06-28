function copyMenu() {
    // copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    // copy inside nav to van
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    // copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// show mobile menu
const menuButton = document.querySelector('.trigger');
const closeButton = document.querySelector('.t-close');
const addClass = document.querySelector('.site');
menuButton.addEventListener('click', () => {
    addClass.classList.toggle('show-menu');
});
closeButton.addEventListener('click', () => {
    addClass.classList.remove('show-menu');
});


// show sub menu on mobile
let angle = false;
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach(menu => menu.addEventListener('click', toggle));

function toggle(event) {
    event.preventDefault();
    submenu.forEach(item => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList != 'expand') {
        this.closest('.has-child').classList.toggle('expand');
    }
}

// slider
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: { el: '.swiper-pagination' }
});

// show search
const searchBottom = document.querySelector('.t-search');
const closeBottom  = document.querySelector('.search-close');
const displaySearch = document.querySelector('.search-bottom');

searchBottom.addEventListener('click', () => {
    if(displaySearch.style.display == 'none') {
        displaySearch.style.display = 'block';
    } else {
        displaySearch.style.display = 'none';
    }
});

closeBottom.addEventListener('click', () => {
    displaySearch.style.display = 'none';
});