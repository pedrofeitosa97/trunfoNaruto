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
  let sum = 0
  for (let i = 0; i < 4; i++) {
    if (radioAtributo[i].checked) {
      sum += 1
      let selecionado = radioAtributo[i].value
      iniciarRodada(selecionado)
      radioAtributo[i].checked = false
    }
  }
  if (sum == 0) {
    alertaErro()
  }
}

//alertaErro()

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
  let placarContent = document.querySelector('.placar')
  placarContent.style = `visibility: visible; animation: fadeIn; animation-duration: 2s; text-align: left`
  let resultado = document.querySelector('.resultado')
  if (atributo == 'ninjutsu') {
    if (usuario[0].ninjutsu > adversario[0].ninjutsu) {
      resultado.innerHTML = `<p>Você <span class ="Win">venceu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
      pontoUsuario()
    } else if (usuario[0].ninjutsu == adversario[0].ninjutsu) {
      resultado.innerHTML = `<p>Você <span class ="Draw">empatou</span> com o adversário!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    } else {
      resultado.innerHTML = `<p>Você <span class ="Lose">perdeu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
      pontoAdversario()
    }
  } else if (atributo == 'taijutsu') {
    if (usuario[0].taijutsu > adversario[0].taijutsu) {
      resultado.innerHTML = `<p>Você <span class ="Win">venceu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
      pontoUsuario()
    } else if (usuario[0].taijutsu == adversario[0].taijutsu) {
      resultado.innerHTML = `<p>Você <span class ="Draw">empatou</span> com o adversário!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    } else {
      resultado.innerHTML = `<p>Você <span class ="Lose">perdeu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
      pontoAdversario()
    }
  } else if (atributo == 'genjutsu') {
    if (usuario[0].genjutsu > adversario[0].genjutsu) {
      resultado.innerHTML = `<p>Você <span class ="Win">venceu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
      pontoUsuario()
    } else if (usuario[0].genjutsu == adversario[0].genjutsu) {
      resultado.innerHTML = `<p>Você <span class ="Draw">empatou</span> com o adversário!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    } else {
      resultado.innerHTML = `<p>Você <span class ="Lose">perdeu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
      pontoAdversario()
    }
  } else if (atributo == 'inteligencia') {
    if (usuario[0].inteligencia > adversario[0].inteligencia) {
      resultado.innerHTML = `<p>Você <span class ="Win">venceu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
      pontoUsuario()
    } else if (usuario[0].inteligencia == adversario[0].inteligencia) {
      resultado.innerHTML = `<p>Você <span class ="Draw">empatou</span> com o adversário!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
    } else {
      resultado.innerHTML = `<p>Você <span class ="Lose">perdeu</span> o duelo!</p>`
      resultado.style = `visibility: visible; animation: fadeIn; animation-duration: 2s;`
      pontoAdversario()
    }
  }
  revelarAdversario()
}

function revelarAdversario() {
  let cardContent = document.querySelector('.cardContent')
  let cardTotal = document.querySelector('.cartaMaquina')
  cardContent.style = `display: block`
  document.getElementById('btnJogar').disabled = true
  document.getElementById('sortearCartas').disabled = false
  document.getElementById('taijutsu').disabled = true
  document.getElementById('ninjutsu').disabled = true
  document.getElementById('genjutsu').disabled = true
  document.getElementById('inteligencia').disabled = true
  cardTotal.classList.add('animate__animated', 'animate__flipInY')
  setTimeout(function () {
    cardTotal.classList.remove('animate__animated', 'animate__flipInY')
  }, 1000)
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
  }, 4500)
}

let placarUsuario = 0
function pontoUsuario() {
  let placar = document.querySelector('.pontoUsuario')
  placarUsuario++
  placar.innerHTML = `Você: ${placarUsuario}`
  if (placarUsuario == 5) {
    let placarContent = document.querySelector('.placar')
    placarContent.innerHTML = `Você venceu do adversário!`
    placarContent.innerHTML = `Você pontuou 5 vezes.`
    placarContent.style = `visibility: visible; animation: fadeIn; animation-duration: 2s; text-align: center`
    placarUsuario = 0
    placarAdversario = 0
    setTimeout(function () {
      let placarContent = document.querySelector('.placar')
      placarContent.style = `visibility: visible; text-align: left`
      placarContent.innerHTML = `
      <p class ="pontoUsuario">Você:</p>
      <p class = "pontoAdversario">Adversário: </p>`
    }, 2500)
  }
}

let placarAdversario = 0

function pontoAdversario() {
  let placar = document.querySelector('.pontoAdversario')
  placarAdversario++
  placar.innerHTML = `Adversário: ${placarAdversario}`

  if (placarAdversario == 5) {
    let placarContent = document.querySelector('.placar')
    placarContent.innerHTML = `O adversário pontuou 5 vezes.`
    placarContent.style = `visibility: visible; animation: fadeIn; animation-duration: 2s; text-align: center`
    placarUsuario = 0
    placarAdversario = 0
    setTimeout(function () {
      let placarContent = document.querySelector('.placar')
      placarContent.style = `visibility: visible; text-align: left`
      placarContent.innerHTML = `
      <p class ="pontoUsuario">Você:</p>
      <p class = "pontoAdversario">Adversário: </p>`
    }, 2500)
  }
}

/* <div class="cartaUsuario">
<img />
<p class="nome">Uzumaki Naruto</p>
<p class="taijutsu">Taijutsu:</p>
<p class="ninjutsu">Ninjutsu</p>
<p class="genjutsu">Genjutsu</p>
<p class="inteligência">Inteligência</p>
</div> */
