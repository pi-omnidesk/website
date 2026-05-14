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
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const titulo = this.querySelector('h3').textContent;
            
            if (index === 0) {
                location.assign('./graficos.html');
            } else if (index === 1) {
                location.assign('./indices.html');
            } else if (index === 2) {
                location.assign('./noticias.html');
            }
        });
    });

    cards.forEach(card => {
        card.style.cursor = 'pointer';
    });

    // Atualizar timestamp de última visita
    const ultimaVisita = new Date().toLocaleString('pt-BR');
    localStorage.setItem('ultima_visita', ultimaVisita);
}

document.addEventListener('DOMContentLoaded', iniciarHome);