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

function iniciarNoticias()
{
    const botoes = document.querySelectorAll('.noticia-leia-mais');
    
    botoes.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.stopPropagation();
            const noticiaContainer = this.closest('.noticia-container');
            const titulo = noticiaContainer.querySelector('.noticia-titulo').textContent;
            
            alert('Abrindo notícia completa: ' + titulo + '\n\nEsta funcionalidade será expandida em breve.');
        });
    });

    const noticiasContainers = document.querySelectorAll('.noticia-container');
    noticiasContainers.forEach(container => {
        container.addEventListener('click', function() {
            const titulo = this.querySelector('.noticia-titulo').textContent;
            console.log('Notícia clicada:', titulo);
        });
    });
}

document.addEventListener('DOMContentLoaded', iniciarNoticias);
