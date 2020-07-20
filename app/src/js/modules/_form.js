const envia = document.querySelector('[type="button"]')

envia.addEventListener('click', (e) => {
  e.preventDefault()
  alert('Desculpe o formulário está desabilitado, por favor entre em contato conosco nos números indicados.')
})