const nome = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const btn = document.querySelector('button');

function retornoUser() {
  fetch("http://localhost:8080/cadastro", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "GET",
  }).then(response => response.json()).then(users => {
    nome.innerHTML = ''; // Limpar o conteúdo anterior
    email.innerHTML = '';
    phone.innerHTML = '';

    users.forEach(user => {
      nome.innerHTML += `<div class="user-data"><p>${user.name}</p></div>`;
      email.innerHTML += `<div class="user-data"><p>${user.email}</p></div>`;
      phone.innerHTML += `<div class="user-data"><p>${user.phone}</p></div>`;
    });

  }).catch(error => console.error('Erro ao buscar usuários:', error));
};

btn.addEventListener('click', () => {
  retornoUser(); // Chama a função para buscar e exibir dados
  
});
