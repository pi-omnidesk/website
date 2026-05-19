function check_logado()
{
    if (localStorage.getItem("usuario_logado") == null)
    {
        location.assign("/login");
    }
}

check_logado();

function sair()
{
    localStorage.removeItem("usuario_logado");
    location.assign("/login");
}