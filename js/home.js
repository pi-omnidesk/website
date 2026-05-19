function check_logado()
{
    if (localStorage.getItem("usuario_logado") == null)
    {
        location.assign("/login");
    }
}
function sair()
{
    localStorage.removeItem("usuario_logado");
    location.assign("/login");
}
function montar_cards()
{
    const usuario = localStorage.getItem("usuario_logado");
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const nome = usuarios.filter(u => u.usuario == usuario)[0].nome;
    const elemento_nome_usuario = document.getElementById("nome-usuario");
    elemento_nome_usuario.textContent = nome;
    const lista_cartoes = document.getElementsByClassName("card");
    lista_cartoes.forEach(function(cartao_atual, indice_cartao)
    {
        cartao_atual.addEventListener("click", function ()
        {
            if (indice_cartao === 0)
            {
                location.assign('/graficos');
            }
            else if (indice_cartao === 1)
            {
                location.assign('/indices');
            }
            else if (indice_cartao === 2)
            {
                location.assign('/noticias');
            }
        });
    });
}
function iniciar_home()
{
    montar_cards();
}
check_logado();
document.addEventListener("DOMContentLoaded", iniciar_home);
