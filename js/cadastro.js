import {mostrar_aviso, sincronizar_usuarios} from "./autenticacao.js";
function cadastro(nome, email, usuario, senha)
{
    const usuarios = sincronizar_usuarios();
    const usuario_digitado = String(usuario || "").trim();
    if (usuarios.filter(
        function(usuario_atual)
        {
            return usuario_atual.usuario === usuario_digitado;
        }
    ).length)
    {
        mostrar_aviso("Usuário já existe", "erro");
        return false;
    }
    usuarios.push({
        nome,
        email,
        usuario: usuario_digitado,
        senha
    });
    sincronizar_usuarios(usuarios);
    mostrar_aviso("Conta criada com sucesso", "sucesso");
    return true;
}
function acao_cadastro(event)
{
    event.preventDefault();
    const nome = event.target.elements.nome.value;
    const email = event.target.elements.email.value;
    const usuario = event.target.elements.usuario.value;
    const senha = event.target.elements.senha.value;
    if (cadastro(nome, email, usuario, senha))
    {
        window.setTimeout(function()
        {
            location.assign("/login");
        }, 700);
    }
}
function inicializar_formulario_cadastro()
{
    const formulario_cadastro = document.getElementById("formulario-cadastro");
    if (formulario_cadastro)
    {
        formulario_cadastro.addEventListener("submit", acao_cadastro);
    }
}
inicializar_formulario_cadastro();