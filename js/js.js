/*handleMenu*/
const menu = document.querySelector('.menu')
const burgerButton = document.querySelector('#burger-menu')
const hideShow = () => {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active')
  } else {
    menu.classList.add('is-active')
  }
}
burgerButton.addEventListener('click', hideShow)

/*matchMedia*/
const mediumbig = window.matchMedia('(max-width:1024px)')
const medium = window.matchMedia('(max-width:768px)')
const small = window.matchMedia('(max-width:480px)')
const verysmall = window.matchMedia('(max-width:320px)')

const mediaMatchValidation = event => {
  if (event.matches) {
    burgerButton.addEventListener('click', hideShow)
  } else {
    burgerButton.removeEventListener('click', hideShow)
  }
}

mediumbig.addEventListener('change', mediaMatchValidation)
medium.addEventListener('change', mediaMatchValidation)
small.addEventListener('change', mediaMatchValidation)
verysmall.addEventListener('change', mediaMatchValidation)
