function check_logado()
{
    if (localStorage.getItem("usuario_logado") == null)
    {
        location.assign("./login.html");
    }
}

check_logado();

function sair()
{
    localStorage.removeItem("usuario_logado");

    location.assign("./login.html");
}

function iniciarHome()
{
    // PEGA O USUÁRIO
    const usuario = localStorage.getItem("usuario_logado");

    // MOSTRA O NOME
    const nomeUsuario = document.getElementById("nomeUsuario");

    if(nomeUsuario && usuario)
    {
        nomeUsuario.textContent = usuario;
    }

    // PEGA OS CARDS
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) =>
    {
        card.addEventListener('click', function()
        {
            if (index === 0)
            {
                location.assign('./graficos.html');
            }

            else if (index === 1)
            {
                location.assign('./indices.html');
            }

            else if (index === 2)
            {
                location.assign('./noticias.html');
            }
        });

        card.style.cursor = 'pointer';
    });

    // SALVA ÚLTIMA VISITA
    const ultimaVisita = new Date().toLocaleString('pt-BR');

    localStorage.setItem('ultima_visita', ultimaVisita);
}

// ESPERA O HTML CARREGAR
document.addEventListener("DOMContentLoaded", iniciarHome);