//Pegando elementos no Documento Object Model:
const formContact = document.getElementById("form-contact");
const inputs = document.getElementsByClassName("input-text");

//Adicionando um listener no evento de enviar formulário:
formContact.addEventListener("submit", enviarMensagem)
//Criando função para definir o que vai acontecer quando evento for executado:
function enviarMensagem(e){
  e.preventDefault();
  alert("Mensagem enviada com sucesso!")
  for(let input of inputs){
    input.value = "";
  }
}

