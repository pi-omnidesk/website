<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>cadastro</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"/>
    <link rel="stylesheet" href="/css/login.css"/>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="/imagens/logo-claro.png" alt="logo"/>
        </div>
        <form id="formulario-cadastro">
            <div class="grupo-entrada">
                <label>nome:</label>
                <input type="text" name="nome" placeholder="digite seu nome" required/>
            </div>
            <div class="grupo-entrada">
                <label>email:</label>
                <input type="email" name="email" placeholder="digite seu email" required/>
            </div>
            <div class="grupo-entrada">
                <label>usuário:</label>
                <input type="text" name="usuario" placeholder="crie um usuário" required/>
            </div>
            <div class="grupo-entrada">
                <label>senha:</label>
                <input type="password" name="senha" placeholder="crie uma senha" required/>
            </div>
            <button type="submit" class="botao-login">➜</button>
        </form>
        <div class="area-cadastro">
            <p>já possui conta?</p>
            <a href="/login" class="botao-cadastro">fazer login</a>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/js/login.js"></script>
</body>
</html>