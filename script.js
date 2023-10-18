const sobre = document.getElementById("sobre");
const formacao = document.getElementById("formacao");
const portfolio = document.getElementById("portfolio");
const contato = document.getElementById("contato");
const formContact = document.getElementById("form-contact");
const inputs = document.getElementsByClassName("input-text");

function showSobre(e){
  sobre.classList.remove('hide');
  formacao.classList.add('hide');
  portfolio.classList.add('hide');
  contato.classList.add('hide');
}

function showFormacao(e){
  formacao.classList.remove('hide');
  sobre.classList.add('hide');
  portfolio.classList.add('hide');
  contato.classList.add('hide');
}

function showPortfolio(e){
  portfolio.classList.remove('hide');
  sobre.classList.add('hide');
  formacao.classList.add('hide');
  contato.classList.add('hide');
}

function showContato(e){
  contato.classList.remove('hide');
  sobre.classList.add('hide');
  portfolio.classList.add('hide');
  formacao.classList.add('hide');
}

formContact.addEventListener("submit", enviarMensagem)

function enviarMensagem(e){
  e.preventDefault();
  alert("Mensagem enviada com sucesso!")
  for(let input of inputs){
    input.value = "";
  }
}

