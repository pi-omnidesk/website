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
            <section id="apresentacao">
                <div class="noticia-container">
                    <div class="noticia-data">14 de maio de 2026</div>
                    <div class="noticia-titulo">Lançamento da Versão 2.0</div>
                    <div class="noticia-descricao">
                        Apresentamos a versão 2.0 do sistema Omnidesk com novas funcionalidades de análise em tempo real e melhorias de performance.
                    </div>
                    <div class="noticia-rodape">
                        <span class="noticia-categoria">Atualização</span>
                        <button class="noticia-leia-mais">Leia mais</button>
                    </div>
                </div>

                <div class="noticia-container">
                    <div class="noticia-data">12 de maio de 2026</div>
                    <div class="noticia-titulo">Integração com APIs Externas</div>
                    <div class="noticia-descricao">
                        Agora é possível integrar dados de múltiplas fontes externas para uma análise completa e centralizada.
                    </div>
                    <div class="noticia-rodape">
                        <span class="noticia-categoria">Integração</span>
                        <button class="noticia-leia-mais">Leia mais</button>
                    </div>
                </div>

                <div class="noticia-container">
                    <div class="noticia-data">10 de maio de 2026</div>
                    <div class="noticia-titulo">Workshops de Treinamento</div>
                    <div class="noticia-descricao">
                        Inscreva-se para nossos workshops sobre como maximizar o uso do sistema Omnidesk. Vagas limitadas disponíveis.
                    </div>
                    <div class="noticia-rodape">
                        <span class="noticia-categoria">Treinamento</span>
                        <button class="noticia-leia-mais">Leia mais</button>
                    </div>
                </div>

                <div class="noticia-container">
                    <div class="noticia-data">08 de maio de 2026</div>
                    <div class="noticia-titulo">Melhorias de Segurança Implementadas</div>
                    <div class="noticia-descricao">
                        Sistema atualizado com protocolos de segurança mais robustos e certificação de conformidade com padrões internacionais.
                    </div>
                    <div class="noticia-rodape">
                        <span class="noticia-categoria">Segurança</span>
                        <button class="noticia-leia-mais">Leia mais</button>
                    </div>
                </div>

                <div class="noticia-container">
                    <div class="noticia-data">05 de maio de 2026</div>
                    <div class="noticia-titulo">Relatório Mensal de Atividades</div>
                    <div class="noticia-descricao">
                        Confira o relatório completo do mês anterior com estatísticas de uso e feedback dos usuários.
                    </div>
                    <div class="noticia-rodape">
                        <span class="noticia-categoria">Relatório</span>
                        <button class="noticia-leia-mais">Leia mais</button>
                    </div>
                </div>

                <div class="noticia-container">
                    <div class="noticia-data">02 de maio de 2026</div>
                    <div class="noticia-titulo">Novo Dashboard de Analytics</div>
                    <div class="noticia-descricao">
                        Experimente o novo dashboard com visualizações aprimoradas e filtros personalizáveis para melhor análise de dados.
                    </div>
                    <div class="noticia-rodape">
                        <span class="noticia-categoria">Feature</span>
                        <button class="noticia-leia-mais">Leia mais</button>
                    </div>
                </div>
            </section>
        </main>
         <footer class="footer">

        <P class="contato">
            CONTATO : (11) 99999-9999
        </P>
        <p>&copy; 2026 PI-OMNIDESK - TODOS OS DIREITOS RESERVADOS</p>
        <p class="redes">
            REDES SOCIAIS : @OmniDesk
        </p>


    </footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
        <script src="/js/noticias.js"></script>
    </body>
</html>