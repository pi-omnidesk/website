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
<script src="/js/login.js"></script>