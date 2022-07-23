const overlay = document.querySelector('.overlay')

// Quando a página for totalmente carregada, o overlay será desabilitado e a página
// irá aparecer.

window.addEventListener('load', function () {
  setTimeout(() => {
    overlay.style.display = 'none'
  }, 1200)
})
