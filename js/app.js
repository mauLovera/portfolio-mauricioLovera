// Variables

// Constants

// CERs 

const hamBtn = document.getElementById('Hamburger')
const xBtn = document.getElementById('Header-nav-x')
const nav = document.getElementById('Nav')

// Event Listeners

hamBtn.addEventListener(`click`, openNavBar)
xBtn.addEventListener(`click`, closeNavBar)


// Functions

function openNavBar() {
  console.log('hello')
  nav.classList.toggle('hidden')
}

function closeNavBar() {
  nav.classList.toggle('hidden')
}