<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Cadastro</title>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"/>

  <link rel="stylesheet" href="./css/login.css">
</head>

<body>

  <div class="container">

    <div class="logo">

      <!-- SUA LOGO -->
      <img src="./imagens/logo-claro.png" alt="Logo">

    </div>

    <form id="cadastroForm">

      <div class="input-group">
        <label>Nome:</label>

        <input 
          type="text"
          name="nome"
          placeholder="Digite seu Nome"
          required
        >
      </div>

      <div class="input-group">
        <label>Email:</label>

        <input 
          type="email"
          name="email"
          placeholder="Digite seu Email"
          required
        >
      </div>

      <div class="input-group">
        <label>Usuário:</label>

        <input 
          type="text"
          name="usuario"
          placeholder="Crie um Usuário"
          required
        >
      </div>

      <div class="input-group">
        <label>Senha:</label>

        <input 
          type="password"
          name="senha"
          placeholder="Crie uma Senha"
          required
        >
      </div>

      <!-- BOTÃO CADASTRO -->
      <button type="submit" class="btn-login">
        ➜
      </button>

    </form>

    <!-- VOLTAR -->
    <div class="cadastro-area">

      <p>Já possui conta?</p>

      <a href="login.html" class="btn-cadastro">
        Fazer Login
      </a>

    </div>

  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
  <script src="./js/login.js"></script>

</body>
</html>