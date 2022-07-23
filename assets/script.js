document.getElementById('taijutsu').disabled = true
document.getElementById('ninjutsu').disabled = true
document.getElementById('genjutsu').disabled = true
document.getElementById('inteligencia').disabled = true

function sortearCartaUsuario() {
  let cartaMaquina = parseInt(Math.random() * personagens.length)
  let cartaUsuario = parseInt(Math.random() * personagens.length)
  let resultado = document.querySelector('.resultado')
  resultado.style = `visibility: hidden`

  document.getElementById('btnJogar').disabled = false
  document.getElementById('sortearCartas').disabled = true

  while (cartaUsuario == cartaMaquina) {
    cartaMaquina = parseInt(Math.random() * personagens.length)
  }

  let cartaSelecionadaMaquina = personagens[parseInt(cartaMaquina)]
  let cartaSelecionadaUsuario = personagens[parseInt(cartaUsuario)]

  criarCartaUsuario(cartaSelecionadaUsuario)
  criarCardMaquina(cartaSelecionadaMaquina)

  document.getElementById('taijutsu').disabled = false
  document.getElementById('ninjutsu').disabled = false
  document.getElementById('genjutsu').disabled = false
  document.getElementById('inteligencia').disabled = false
}

function receberAtributo() {
  let radioAtributo = document.getElementsByName('atributos')
  for (let i = 0; i < 4; i++) {
    if (radioAtributo[i].checked == false) {
      alertaErro()
      if (radioAtributo[i].checked) {
        let selecionado = radioAtributo[i].value
        iniciarRodada(selecionado)
        radioAtributo[i].checked = false
      }
    }
  }
}

function criarCartaUsuario(carta) {
  let divPrincipal = document.querySelector('.cartaUsuario')
  divPrincipal.innerHTML = `
    <img src = "${carta.foto}"/>
    <p class="nome">${carta.nome}</p>
    <p class="taijutsu">Taijutsu: <span class = "atribute">${carta.taijutsu}</span></p>
    <p class="ninjutsu">Ninjutsu: <span class = "atribute">${carta.ninjutsu}</span></p>
    <p class="genjutsu">Genjutsu: <span class = "atribute">${carta.genjutsu}</span></p>
    <p class="inteligencia">Inteligência: <span class = "atribute">${carta.inteligencia}</span></p>
  `
  divPrincipal.classList.add('animate__animated', 'animate__jackInTheBox')
  usuario.push(carta)
  setTimeout(function () {
    divPrincipal.classList.remove('animate__animated', 'animate__jackInTheBox')
  }, 800)
}

function criarCardMaquina(carta) {
  let divPrincipal = document.querySelector('.cartaMaquina')
  divPrincipal.innerHTML = `
    <div class = "cardContent">
      <img src = "${carta.foto}"/>
      <p class="nome">${carta.nome}</p>
      <p class="taijutsu">Taijutsu: <span class = "atribute">${carta.taijutsu}</span></p>
      <p class="ninjutsu">Ninjutsu: <span class = "atribute">${carta.ninjutsu}</span></p>
      <p class="genjutsu">Genjutsu: <span class = "atribute">${carta.genjutsu}</span></p>
      <p class="inteligencia">Inteligência: <span class = "atribute">${carta.inteligencia}</span></p>
    </div>
  `
  divPrincipal.classList.add('animate__animated', 'animate__jackInTheBox')
  adversario.push(carta)
  setTimeout(function () {
    divPrincipal.classList.remove('animate__animated', 'animate__jackInTheBox')
  }, 800)
}

let usuario = []
let adversario = []

function iniciarRodada(atributo) {
  let resultado = document.querySelector('.resultado')
  if (atributo == 'ninjutsu') {
    if (usuario[0].ninjutsu > adversario[0].ninjutsu) {
      resultado.innerHTML = `<p>Você <span class ="Win">venceu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    } else if (usuario[0].ninjutsu == adversario[0].ninjutsu) {
      resultado.innerHTML = `<p>Você <span class ="Draw">empatou</span> com o adversário!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    } else {
      resultado.innerHTML = `<p>Você <span class ="Lose">perdeu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    }
  } else if (atributo == 'taijutsu') {
    if (usuario[0].taijutsu > adversario[0].taijutsu) {
      resultado.innerHTML = `<p>Você <span class ="Win">venceu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    } else if (usuario[0].taijutsu == adversario[0].taijutsu) {
      resultado.innerHTML = `<p>Você <span class ="Draw">empatou</span> com o adversário!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    } else {
      resultado.innerHTML = `<p>Você <span class ="Lose">perdeu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    }
  } else if (atributo == 'genjutsu') {
    if (usuario[0].genjutsu > adversario[0].genjutsu) {
      resultado.innerHTML = `<p>Você <span class ="Win">venceu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    } else if (usuario[0].genjutsu == adversario[0].genjutsu) {
      resultado.innerHTML = `<p>Você <span class ="Draw">empatou</span> com o adversário!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    } else {
      resultado.innerHTML = `<p>Você <span class ="Lose">perdeu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    }
  } else if (atributo == 'inteligencia') {
    if (usuario[0].inteligencia > adversario[0].inteligencia) {
      resultado.innerHTML = `<p>Você <span class ="Win">venceu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    } else if (usuario[0].inteligencia == adversario[0].inteligencia) {
      resultado.innerHTML = `<p>Você <span class ="Draw">empatou</span> com o adversário!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    } else {
      resultado.innerHTML = `<p>Você <span class ="Lose">perdeu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    }
  }
  revelarAdversario()
}

function revelarAdversario() {
  let cardContent = document.querySelector('.cardContent')
  cardContent.style = `display: block`
  document.getElementById('btnJogar').disabled = true
  document.getElementById('sortearCartas').disabled = false
  document.getElementById('taijutsu').disabled = true
  document.getElementById('ninjutsu').disabled = true
  document.getElementById('genjutsu').disabled = true
  document.getElementById('inteligencia').disabled = true
  cardContent.classList.add('animate__animated', 'animate__fadeIn')
  usuario = []
  adversario = []
}

function alertaErro() {
  let cardAlerta = document.querySelector('.alert')
  cardAlerta.classList.add('animate__animated', 'animate__fadeInRightBig')
  cardAlerta.style = `visibility: visible`
  setTimeout(function () {
    cardAlerta.classList.add('animate__animated', 'animate__fadeOut')
  }, 4000)
  setTimeout(function () {
    cardAlerta.classList.remove('animate__animated', 'animate__fadeOut')
    cardAlerta.classList.remove('animate__animated', 'animate__fadeIn')
    cardAlerta.style = `visibility: hidden`
  }, 5000)
}
/* <div class="cartaUsuario">
<img />
<p class="nome">Uzumaki Naruto</p>
<p class="taijutsu">Taijutsu:</p>
<p class="ninjutsu">Ninjutsu</p>
<p class="genjutsu">Genjutsu</p>
<p class="inteligência">Inteligência</p>
</div> */
