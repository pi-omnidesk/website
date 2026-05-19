<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HOME</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"/>
        <link rel="stylesheet" href="/css/home.css"/>
    </head>
    <body>
        <nav class="nav">
            <img class="logo" src="/imagens/logomarca.png" alt="logo do omnidesk"/>
            <ul class="nav">
                <li><a href="/home">HOME</a></li>
                <li><a href="/noticias">NOTÍCIAS</a></li>
                <li><a href="/indices">ÍNDICES</a></li>
                <li><a href="/graficos">GRÁFICOS</a></li>
                <li><a href="/calculadora">CALCULADORA</a></li>
                <li><a href="/personalizacao">PERSONALIZAÇÃO</a></li>
            </ul>
            <button class="sair" onclick="sair()">SAIR</button>
        </nav>
        <main>
            <div id="boas-vindas">
                <h1>Bem-vindo, <span id="nome-usuario"></span> 👋</h1>
                <p>Que bom ter você de volta ao OmniDesk.</p>
            </div>
            <section id="apresentacao">
                <div class="card">
                    <h3 class="card-header">📊 Visão Geral</h3>
                    <p class="card-content">Sistema integrado para monitoramento e análise de dados em tempo real.</p>
                    <div class="card-stats">
                        <div class="stat">
                            <span class="value">X</span>
                            <span class="label">Métricas</span>
                        </div>
                        <div class="stat">
                            <span class="value">X</span>
                            <span class="label">Gráficos</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <h3 class="card-header">📈 Indicadores</h3>
                    <p class="card-content">Acompanhe indicadores e índices do projeto em detalhes.</p>
                    <div class="card-stats">
                        <div class="stat">
                            <span class="value">X %</span>
                            <span class="label">Progresso</span>
                        </div>
                        <div class="stat">
                            <span class="value">X</span>
                            <span class="label">Índices</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <h3 class="card-header">📰 Notícias</h3>
                    <p class="card-content">Atualizações e notícias sobre o projeto integrador.</p>
                    <div class="card-stats">
                        <div class="stat">
                            <span class="value">X</span>
                            <span class="label">Notícias</span>
                        </div>
                        <div class="stat">
                            <span class="value">X</span>
                            <span class="label">Hoje</span>
                        </div>
                    </div>
                </div>

            </div>
            </section>
        </main>
        <footer class="footer">
            <p class="contato">
            CONTATO : (11) 99999-9999
            </p>
            <p>&copy; 2026 PI-OMNIDESK - TODOS OS DIREITOS RESERVADOS</p>
            <p class="redes">
                REDES SOCIAIS : @OmniDesk
            </p>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
        <script src="/js/home.js"></script>
    </body>
</html>