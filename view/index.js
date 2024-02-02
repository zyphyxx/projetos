
function nova(){
  window.open('/view/home.html');
}

const texto = document.getElementById('texto');

const text1 = document.getElementById('text1');

function apertar() {
  const nome = document.getElementById('name-id').value;
  const email = document.getElementById('email-id').value;
  const phone = document.getElementById('mobile-number').value;
  const pass = document.getElementById('pass-id').value;

  text1.innerHTML += nome;
  
}





