// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');
// MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');




// ================== SIDEBAR ==================
function removeActiveClass() {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass();
        item.classList.add('active');

        let notifications = document.querySelector('.notifications-popup');
        if(item.id != 'notifications') {
            notifications.style.display = 'none';
        } else {
            notifications.style.display = 'block';
            let count = document.querySelector('#notifications .notification-count');
            count.style.display = 'none';
        }
    });
});

// ================== MESSAGES ==================
// searches chats
function searchMessage() {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    });
}
messageSearch.addEventListener('keyup', searchMessage);


// hightlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
     messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});

// THEME/DISPLAY CUSTOMIZATION

// open modal
function openThemeModal() {
    themeModal.style.display = 'grid';
}
// close modal
function closeThemeModal(e) {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

// ================== FONT ==================
function removeSizeSelector() {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    });
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        let fontSize;
        removeSizeSelector();
        size.classList.add('active');

        if(size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    });
});

// change primary colors
function changeActiveColorClass() {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    });
}
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;

        if(color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if(color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if(color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if(color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if(color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        changeActiveColorClass();
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    });
});

// theme BACKGROUND values
let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

// changes background color
function changeBG() {
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
}

Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    window.location.reload();
});
Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    lightColorLightness = '15%';
    whiteColorLightness = '20%';

    Bg1.classList.remove('active');
    Bg2.classList.add('active');
    Bg3.classList.remove('active');

    changeBG();
});
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    lightColorLightness = '0%';
    whiteColorLightness = '10%';

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    Bg3.classList.add('active');

    changeBG();
});