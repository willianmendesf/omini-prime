const burguer = document.querySelector('#menu-mobile');
const mobile  = document.querySelector('.menu-mobile');
const close   = document.querySelector('.close');
const nav     = document.querySelector('.nav-mob');

const Close = (...target) => {
  target.forEach( item => {
    item.addEventListener('click', () => {
      mobile.classList.toggle('--close')
    })
  })
}

Close(burguer, close, nav)