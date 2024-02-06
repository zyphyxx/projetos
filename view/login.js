
const form = document.querySelector('form');
const nome = document.getElementById('nome');
const senha = document.getElementById('senha');

function alerta(){
  const obj = {
    objNome: nome.value,
    objSenha: senha.value
  }

  alert(JSON.stringify(obj,null,2));
}

form.addEventListener('submit', function(event){
  event.preventDefault();
  alerta()
});
