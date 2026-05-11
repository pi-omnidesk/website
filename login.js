// LOGIN
const loginForm = document.getElementById("loginForm");

if(loginForm){

  loginForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Login realizado!");

  });

}

// CADASTRO
const cadastroForm = document.getElementById("cadastroForm");

if(cadastroForm){

  cadastroForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Cadastro realizado!");

  });

}