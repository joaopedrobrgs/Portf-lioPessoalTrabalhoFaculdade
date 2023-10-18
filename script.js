//Pegando elementos no Documento Object Model:
const formContact = document.getElementById("form-contact");
const inputs = document.getElementsByClassName("input-text");

//Adicionando um listener no evento de enviar formulário e criando função para 
//definir o que vai acontecer a partir disso:
formContact.addEventListener("submit", enviarMensagem)
function enviarMensagem(e){
  e.preventDefault();
  alert("Mensagem enviada com sucesso!")
  for(let input of inputs){
    input.value = "";
  }
}

