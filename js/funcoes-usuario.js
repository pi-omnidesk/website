function obter_usuario_logado()
{
    return localStorage.getItem("usuario_logado");
}
function check_logado()
{
    if (obter_usuario_logado() === null)
    {
        location.assign("/login");
    }
}
function sair()
{
    localStorage.removeItem("usuario_logado");
    location.assign("/login");
}
function vincular_botao_sair()
{
    const botao_sair = document.getElementById("deslogar");
    if (botao_sair)
    {
        botao_sair.addEventListener("click", sair);
    }
}
function inicializar_usuario()
{
    check_logado();
    vincular_botao_sair();
}
export {check_logado, sair, inicializar_usuario};