var hamburgerButton = document.querySelector('button.hamburger-btn')
var menu = document.querySelector('ul.hamburger-menu')

// menu function
hamburgerButton.onclick = showMenu
function showMenu(e) {
    e.stopPropagation()
    menu.classList.toggle('show-menu')
    hamburgerButton.focus()
    if (menu.classList.contains('show-menu')) {
        hamburgerButton.setAttribute('aria-expanded', true)
    } else {
        hamburgerButton.setAttribute('aria-expanded', false)
    }
  }
  function closeMenu(e) {
    e.stopPropagation()
    hamburgerButton.focus()
    if (menu.classList.contains('show-menu')) {
        hamburgerButton.setAttribute('aria-expanded', true)
        menu.classList.toggle('show-menu')
    } else {
        hamburgerButton.setAttribute('aria-expanded', false)
    }
  }

//hide the menu if someone clicks off the menu
document.body.onclick = function(e) {
    if (!menu.contains(e.target)){
        closeMenu(e)
    }
}

//hide the menu if someone clicks the escape key 
document.onkeyup = function(e){
    if (e.key === 'Escape'){
        closeMenu(e)
    }
}