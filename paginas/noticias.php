<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>NOTÍCIAS</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"/>

        <link rel="stylesheet" href="/css/noticias.css"/>
    </head>
    <body>
        <nav class="nav">
            <img class="logo" src="/imagens/logomarca.png" alt="logo do omnidesk"/>
            <ul class="nav">
                <li><a href="/home">HOME</a></li>
                <li><a href="/noticias">NOTÍCIAS</a></li>
                <li><a href="/indices">ÍNDICES</a></li>
                <li><a href="/graficos">GRÁFICOS</a></li>
            </ul>
            <button class="sair" onclick="sair()">SAIR</button>
        </nav>
        <main>
            <section id="apresentacao" class="noticias-layout">
                <aside class="noticias-coluna noticias-lista-coluna">
                    <header class="noticias-cabecalho">
                        <span class="noticias-eyebrow">Mercado por empresa</span>
                        <h1>Notícias ligadas aos ativos do índice</h1>
                        <p>Lista curta com ticker, empresa, resumo e data. Clique em um item para abrir artigo completo e fontes recentes via API pública.</p>
                    </header>
                    <div id="listaNoticias" class="lista-noticias"></div>
                </aside>

                <article id="painelNoticia" class="noticia-detalhe">
                    <div class="noticia-placeholder">
                        <span class="noticias-eyebrow">Painel de leitura</span>
                        <h2>Selecione uma notícia</h2>
                        <p>A coluna da direita fica vazia até seleção. Depois abre artigo completo, contexto da empresa e fontes relacionadas ao ticker.</p>
                    </div>
                </article>
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
        <script src="/js/noticias.js"></script>
    </body>
</html>