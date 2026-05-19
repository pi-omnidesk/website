<!DOCTYPE html>
<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>HOME</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"/>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css"/>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"/>

    <link rel="stylesheet" href="./css/home.css">

</head>

<body>

    <!-- NAVBAR -->

    <nav class="nav">

        <img 
            class="logo" 
            src="./imagens/logomarca.png" 
            alt="logo do omnidesk"
        >

        <ul class="nav">

            <li>
                <a href="/home">
                    HOME
                </a>
            </li>

            <li>
                <a href="/noticias">
                    NOTÍCIAS
                </a>
            </li>

            <li>
                <a href="/indices">
                    ÍNDICES
                </a>
            </li>

            <li>
                <a href="/graficos">
                    GRÁFICOS
                </a>
            </li>

        </ul>

        <button 
            class="sair" 
            onclick="sair()"
        >
            SAIR
        </button>

    </nav>

    <!-- MAIN -->

    <main>

        <!-- BOAS VINDAS -->

        <div class="boas-vindas">

            <h1>
                Bem-vindo,
                <span id="nomeUsuario"></span>
                👋
            </h1>

            <p>
                Que bom ter você de volta ao OmniDesk.
            </p>

        </div>

        <!-- CARDS -->

        <section id="apresentacao">

            <!-- CARD 1 -->

            <div class="card">

                <div class="card-header">

                    <h3>
                        📊 Visão Geral
                    </h3>

                </div>

                <div class="card-content">

                    Sistema integrado para monitoramento e análise de dados em tempo real.

                </div>

                <div class="card-stats">

                    <div class="stat">

                        <div class="value">
                            24
                        </div>

                        <div class="label">
                            Métricas
                        </div>

                    </div>

                    <div class="stat">

                        <div class="value">
                            15
                        </div>

                        <div class="label">
                            Gráficos
                        </div>

                    </div>

                </div>

            </div>

            <!-- CARD 2 -->

            <div class="card">

                <div class="card-header">

                    <h3>
                        📈 Indicadores
                    </h3>

                </div>

                <div class="card-content">

                    Acompanhe indicadores e índices do projeto em detalhes.

                </div>

                <div class="card-stats">

                    <div class="stat">

                        <div class="value">
                            85%
                        </div>

                        <div class="label">
                            Progresso
                        </div>

                    </div>

                    <div class="stat">

                        <div class="value">
                            12
                        </div>

                        <div class="label">
                            Índices
                        </div>

                    </div>

                </div>

            </div>

            <!-- CARD 3 -->

            <div class="card">

                <div class="card-header">

                    <h3>
                        📰 Notícias
                    </h3>

                </div>

                <div class="card-content">

                    Atualizações e notícias sobre o projeto integrador.

                </div>

                <div class="card-stats">

                    <div class="stat">

                        <div class="value">
                            8
                        </div>

                        <div class="label">
                            Notícias
                        </div>

                    </div>

                    <div class="stat">

                        <div class="value">
                            3
                        </div>

                        <div class="label">
                            Hoje
                        </div>

                    </div>

                </div>

            </div>

        </section>

    </main>

    <!-- FOOTER -->

    <footer class="footer">

        <P class="contato">
            CONTATO : (11) 99999-9999
        </P>
        <p>&copy; 2026 PI-OMNIDESK - TODOS OS DIREITOS RESERVADOS</p>
        <p class="redes">
            REDES SOCIAIS : @OmniDesk
        </p>


    </footer>

    <!-- SCRIPTS -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

    <script src="./js/home.js"></script>

</body>

</html>