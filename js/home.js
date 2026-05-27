import {inicializar_usuario, sair} from "./funcoes-usuario.js";
function montar_cards()
{
    const usuario = localStorage.getItem("usuario_logado");
    let usuarios = [];
    try
    {
        usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    }
    catch (erro)
    {
        usuarios = [];
    }
    const usuario_encontrado = (usuarios || []).find(function(usuario_atual)
    {
        return usuario_atual.usuario === usuario;
    });
    if (usuario_encontrado == null)
    {
        sair();
        return;
    }
    const nome = usuario_encontrado.nome;
    const elemento_nome_usuario = document.getElementById("nome-usuario");
    elemento_nome_usuario.textContent = nome;
    const lista_cartoes = Array.from(document.getElementsByClassName("card"));
    lista_cartoes.forEach(function(cartao_atual, indice_cartao)
    {
        cartao_atual.addEventListener("click", function ()
        {
            if (indice_cartao === 0)
            {
                location.assign("/graficos");
            }
            else if (indice_cartao === 1)
            {
                location.assign("/indices");
            }
            else if (indice_cartao === 2)
            {
                location.assign("/noticias");
            }
        });
    });
}
function iniciar_home()
{
    montar_cards();
}
inicializar_usuario();
document.addEventListener("DOMContentLoaded", iniciar_home);
