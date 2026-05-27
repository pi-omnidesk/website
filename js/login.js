import {mostrar_aviso, sincronizar_usuarios} from "./autenticacao.js";
function login(usuario, senha)
{
    const usuarios = sincronizar_usuarios();
    const usuario_digitado = String(usuario || "").trim();
    const senha_digitada = String(senha || "");
    const usuario_encontrado = usuarios.find(
        function(usuario_atual)
        {
            return usuario_atual.usuario === usuario_digitado && usuario_atual.senha === senha_digitada;
        }
    );
    if (usuario_encontrado)
    {
        localStorage.setItem(
            "usuario_logado",
            usuario_encontrado.usuario
        );
        mostrar_aviso("Login realizado com sucesso", "sucesso");
        return true;
    }
    else
    {
        mostrar_aviso("Usuário ou senha inválidos", "erro");
        return false;
    }
}
function acao_login(event)
{
    event.preventDefault();
    const usuario = event.target.elements.usuario.value;
    const senha = event.target.elements.senha.value;
    if (login(usuario, senha))
    {
        window.setTimeout(function()
        {
            location.assign("/home");
        }, 700);
    }
}
function inicializar_formulario_login()
{
    const formulario_login = document.getElementById("formulario-login");
    if (formulario_login)
    {
        formulario_login.addEventListener("submit", acao_login);
    }
}
inicializar_formulario_login();