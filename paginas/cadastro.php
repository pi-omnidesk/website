<div class="container">
    <div class="logo">
        <img src="/imagens/logo-claro.png" alt="logo"/>
    </div>
    <form id="formulario-cadastro">
        <div class="grupo-entrada">
            <label>Nome:</label>
            <input type="text" name="nome" placeholder="Digite seu nome" required/>
        </div>
        <div class="grupo-entrada">
            <label>Email:</label>
            <input type="email" name="email" placeholder="Digite seu email" required/>
        </div>
        <div class="grupo-entrada">
            <label>Usuário:</label>
            <input type="text" name="usuario" placeholder="Crie um usuário" required/>
        </div>
        <div class="grupo-entrada">
            <label>Senha:</label>
            <input type="password" name="senha" placeholder="Crie uma senha" required/>
        </div>
        <button type="submit" class="botao-login">➜</button>
    </form>
    <div class="area-cadastro">
        <p>Já possui conta?</p>
        <a href="/login" class="botao-cadastro">Fazer login</a>
    </div>
</div>
<link rel="stylesheet" href="/css/login.css"/>
<script src="/js/login.js"></script>