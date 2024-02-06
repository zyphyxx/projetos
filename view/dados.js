const texto = document.getElementById('texto');

function retornoUser() {
  fetch("http://localhost:8080/cadastro",{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method:"GET",
  }).then(response => response.json()).then(users => {
    users.forEach(users => {
      texto.innerHTML += `-----DADOS------`
      texto.innerHTML += `<p>Nome: ${users.name}</p>`
      texto.innerHTML += `<p>Email: ${users.email}</p>`
      texto.innerHTML += `<p>Phone: ${users.phone}</p>`
    });
  }).catch(error => console.error('erro ao buscar usuarios:', error))
};