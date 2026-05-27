<div class="container">
    <div class="logo">
        <img src="/imagens/logo-claro.png" alt="logo"/>
    </div>
    <form id="formulario-login">
        <div class="grupo-entrada">
            <label>Usuário:</label>
            <input type="text" name="usuario" placeholder="Digite seu usuário" required/>
        </div>
        <div class="grupo-entrada">
            <label>Senha:</label>
            <input type="password" name="senha" placeholder="Digite sua senha" required/>
        </div>
        <button type="submit" class="botao-login" aria-label="entrar">
            <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
        </button>
    </form>
    <div class="area-cadastro">
        <p>Não possui conta?</p>
        <a href="/cadastro" class="botao-cadastro">
            <span class="material-symbols-rounded" aria-hidden="true">person_add</span>
            <span>Cadastre-se</span>
        </a>
    </div>
</div>