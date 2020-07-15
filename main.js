const menuBtn = document.querySelector('.hamburger')
const navMenu = document.querySelector('.main-nav')
const overlay = document.getElementById('overlay')

function menu() {
    if (!menuBtn.classList.contains('hamburger--active')) {
        menuBtn.classList.add('hamburger--active')
        navMenu.classList.add('main-nav--active')
        overlay.classList.add('overlay')
    } else {
        menuBtn.classList.remove('hamburger--active')
        navMenu.classList.remove('main-nav--active')
        overlay.classList.remove('overlay')
    }
}

menuBtn.onclick = menu;