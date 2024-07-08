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

// show dpt menu
const dptButton = document.querySelector('.dpt-cat .dpt-trigger');
const dptClass = document.querySelector('.site');

dptButton.addEventListener('click', () => {
    dptClass.classList.toggle('show-dpt');
})

// product image slider
var productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
});
var productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    thumbs: {
        swiper: productThumb
    }
});

// stock products bar width percentage
let stocks = document.querySelectorAll('.products .stock');
for(let x = 0; x < stocks.length; x++) {
    let stock = stocks[x].dataset.stock;
    let sold = stocks[x].querySelector('.qty-sold').innerHTML;
    let available = stocks[x].querySelector('.qty-available');
    let percent = 100*sold/stock;
    available.innerHTML = stock - sold;
    stocks[x].querySelector('.available').style.width = percent + '%';
}

// show cart on click
const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if(!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
        }
    }, 250);
});

// close by click outside
document.addEventListener('click', (event) => {
    const isClosest = event.target.closest(divtoShow);
    if(!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show');
    } 
});