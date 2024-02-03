
  const form = document.getElementById('container-meio');
  const nome = document.getElementById('name-id');
  const email = document.getElementById('email-id');
  const phone = document.getElementById('mobile-number');
  const pass = document.getElementById('pass-id');

  function cadastrar(){
    fetch("http://localhost:8080/cadastro",
       {
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(
          {
            dadosNome: nome.value,
            dadosEmail: email.value,
            dadosPhone: phone.value,
            dadosPass: pass.value
          }
        )}
        
        

        ).then(function(res) {console.log(res)})
        .catch(function(res) {console.log(res)})
  };

  function limpar () {
    nome.value = ''
    email.value = ''
    phone.value = ''
    pass.value = ''
  }


 
 
   form.addEventListener('submit', function (ev) {
      ev.preventDefault();

      cadastrar();
      limpar();

    
  });








