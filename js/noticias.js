import {inicializar_usuario} from "./funcoes-usuario.js";
const noticias_mercado =
[
    {
        ticker: "PETR4",
        empresa: "Petrobras",
        setor: "Petróleo e energia",
        data: "14 de maio de 2026",
        titulo: "Petrobras reforça eficiência operacional e foco em caixa",
        resumo: "A estatal segue no centro do noticiário com ajustes de produção, disciplina de capital e expectativa sobre distribuição de resultados.",
        artigo:
        [
            "A Petrobras continua entre os ativos mais observados do mercado por combinar escala, liquidez e sensibilidade direta ao petróleo internacional.",
            "Nos últimos dias, o foco dos analistas ficou sobre disciplina de investimentos, margens de refino e ritmo de geração de caixa. Esse conjunto de fatores influencia a leitura do papel tanto para investidores de valor quanto para estratégias ligadas a dividendos.",
            "Na prática, a leitura do mercado é simples: qualquer sinal de melhora operacional ou maior previsibilidade tende a sustentar o interesse pelo ticker PETR4."
        ],
        consulta: "Petrobras OR PETR4 OR \"Petrobras PN\""
    },
    {
        ticker: "VALE3",
        empresa: "Vale",
        setor: "Mineração",
        data: "14 de maio de 2026",
        titulo: "Vale acompanha minério de ferro e demanda chinesa",
        resumo: "A mineradora reage ao humor do minério, ao câmbio e ao cenário de demanda global por aço.",
        artigo:
        [
            "A Vale segue como termômetro do ciclo global de commodities. O papel costuma reagir a mudanças no preço do minério de ferro, ao ritmo industrial da China e à leitura de risco sobre a economia mundial.",
            "Quando o mercado percebe tendência de recomposição de demanda, o ativo ganha tração. Em cenários opostos, a aversão a risco e a pressão sobre preços das commodities costumam pesar rapidamente no ticker VALE3.",
            "A companhia permanece no radar porque combina geração de caixa relevante com sensibilidade alta a eventos macroeconômicos."
        ],
        consulta: "Vale OR VALE3 OR \"Vale ON\""
    },
    {
        ticker: "ITUB4",
        empresa: "Itaú Unibanco",
        setor: "Bancos",
        data: "13 de maio de 2026",
        titulo: "Itaú mantém foco em rentabilidade e carteira de crédito",
        resumo: "O banco aparece entre os destaques pela resiliência operacional e pela capacidade de repassar tecnologia ao varejo financeiro.",
        artigo:
        [
            "Itaú Unibanco continua sendo um dos papéis mais acompanhados da bolsa brasileira por unir porte, previsibilidade e histórico de rentabilidade acima da média.",
            "As discussões mais recentes passam por inadimplência, crescimento de crédito e evolução das receitas com serviços digitais. Esses vetores ajudam a explicar o apetite do mercado por ITUB4.",
            "Em resumo, o ativo segue como referência do setor bancário e costuma servir de base para leitura de humor no segmento financeiro."
        ],
        consulta: "Itaú Unibanco OR ITUB4 OR banco digital"
    },
    {
        ticker: "WEGE3",
        empresa: "WEG",
        setor: "Indústria e tecnologia",
        data: "13 de maio de 2026",
        titulo: "WEG acelera expansão industrial e vendas externas",
        resumo: "A companhia segue relevante por exportação, automação e exposição à transição energética.",
        artigo:
        [
            "WEG mantém narrativa forte entre investidores porque combina crescimento orgânico, internacionalização e exposição a eletrificação e automação industrial.",
            "O mercado observa com atenção a evolução de pedidos, margens e capacidade de manter ritmo de expansão mesmo em cenários mais duros para indústria local.",
            "Por isso o ticker WEGE3 segue entre os ativos que costumam capturar fluxo quando o investidor busca crescimento com marca consolidada."
        ],
        consulta: "WEG OR WEGE3 OR automação industrial"
    },
    {
        ticker: "EMBR3",
        empresa: "Embraer",
        setor: "Aeronáutico",
        data: "12 de maio de 2026",
        titulo: "Embraer fortalece carteira comercial e defesa",
        resumo: "A fabricante acompanha entregas, carteira de pedidos e avanço em aviação executiva e defesa.",
        artigo:
        [
            "A Embraer é acompanhada por investidores que buscam exposição ao ciclo aeroespacial e ao aumento de demanda por aeronaves regionais e executivas.",
            "As atenções ficam em entregas, contratos, margens e crescimento internacional. O mercado também monitora a divisão de defesa, que adiciona um componente estratégico ao negócio.",
            "Em EMBR3, a combinação de backlog e execução operacional costuma ser o principal gatilho de reprecificação."
        ],
        consulta: "Embraer OR EMBR3 OR aeronaves regionais"
    },
    {
        ticker: "TOTS3",
        empresa: "TOTVS",
        setor: "Software",
        data: "12 de maio de 2026",
        titulo: "TOTVS cresce com software de gestão e serviços digitais",
        resumo: "A empresa segue em destaque pela recorrência de receitas e pela expansão de soluções em nuvem e dados.",
        artigo:
        [
            "TOTVS mantém posição central no ecossistema de software brasileiro por atender empresas de vários portes com sistemas de gestão e serviços complementares.",
            "O mercado costuma olhar para a combinação de recorrência, expansão de margens e capacidade de vender mais módulos para a base instalada.",
            "Essa previsibilidade faz com que TOTS3 seja visto como ativo defensivo dentro do segmento de tecnologia local."
        ],
        consulta: "TOTVS OR TOTS3 OR software de gestão"
    },
    {
        ticker: "PRIO3",
        empresa: "PRIO",
        setor: "Óleo e gás",
        data: "11 de maio de 2026",
        titulo: "PRIO segue no radar com produção e eficiência operacional",
        resumo: "A petroleira independente atrai atenção pelo crescimento de produção e disciplina de custos.",
        artigo:
        [
            "PRIO se consolidou como uma das teses preferidas de quem procura alocação em petróleo com perfil mais agressivo de crescimento.",
            "A leitura sobre o ativo gira em torno de aumento de produção, integração de campos e eficiência operacional. Quando esses pontos evoluem, a resposta do mercado tende a ser rápida.",
            "Por isso o ticker PRIO3 costuma aparecer em listas de acompanhamento de energia com viés de expansão."
        ],
        consulta: "PRIO OR PRIO3 OR petroleira independente"
    },
    {
        ticker: "RDOR3",
        empresa: "Rede D'Or",
        setor: "Saúde",
        data: "11 de maio de 2026",
        titulo: "Rede D'Or mantém expansão hospitalar e foco em eficiência",
        resumo: "A companhia segue relevante pela expansão da rede, sinergias e geração de caixa em saúde privada.",
        artigo:
        [
            "Rede D'Or segue sob radar por expandir capacidade hospitalar e consolidar operação em um setor de demanda estrutural.",
            "O mercado observa receita por leito, taxa de ocupação e execução na integração de novos ativos. Em saúde, consistência operacional pesa muito mais que picos pontuais de crescimento.",
            "RDOR3 permanece como uma das apostas de qualidade dentro de assistência hospitalar privada."
        ],
        consulta: "Rede D'Or OR RDOR3 OR hospitais privados"
    },
    {
        ticker: "MGLU3",
        empresa: "Magazine Luiza",
        setor: "Varejo",
        data: "10 de maio de 2026",
        titulo: "Magazine Luiza ajusta operação e busca ganho de margem",
        resumo: "O varejo segue sensível a crédito, consumo e produtividade da operação digital.",
        artigo:
        [
            "Magazine Luiza continua entre os papéis mais acompanhados do varejo por sua sensibilidade ao consumo doméstico e à execução do ecossistema digital.",
            "O investidor olha para margem bruta, controle de despesas e melhora no ciclo de caixa. Em cenários de consumo mais fraco, a diferença costuma vir de eficiência e disciplina operacional.",
            "MGLU3 mantém alta volatilidade, mas segue relevante para quem acompanha o humor do varejo brasileiro."
        ],
        consulta: "Magazine Luiza OR MGLU3 OR varejo online"
    },
    {
        ticker: "VIVT3",
        empresa: "Telefônica Brasil",
        setor: "Telecom",
        data: "10 de maio de 2026",
        titulo: "Telefônica Brasil combina receita recorrente e serviços móveis",
        resumo: "A companhia segue forte em conectividade, pós-pago e serviços corporativos.",
        artigo:
        [
            "Telefônica Brasil, dona da marca Vivo, segue entre os ativos mais estáveis da bolsa por operar em telecom com base grande de clientes e receita recorrente.",
            "O mercado acompanha expansão de fibra, churn e avanço em serviços digitais. A previsibilidade do caixa costuma sustentar interesse em VIVT3 mesmo em cenários mais cautelosos.",
            "É um papel que muitos investidores usam como proteção dentro da carteira local."
        ],
        consulta: "Telefônica Brasil OR VIVT3 OR Vivo"
    },
    {
        ticker: "BBAS3",
        empresa: "Banco do Brasil",
        setor: "Bancos",
        data: "09 de maio de 2026",
        titulo: "Banco do Brasil mantém foco em crédito e agronegócio",
        resumo: "O banco segue sensível à carteira agrícola, ao crédito corporativo e à política de dividendos.",
        artigo:
        [
            "Banco do Brasil costuma ganhar destaque quando o mercado discute crédito ao agronegócio, crescimento da carteira e capacidade de distribuição de resultados.",
            "O ativo também reage a expectativas sobre inadimplência e direção do crédito. Por isso BBAS3 é monitorado não só por investidores de valor, mas por quem acompanha o setor financeiro como um todo.",
            "A tese fica mais forte quando o balanço mostra estabilidade e geração consistente de lucro."
        ],
        consulta: "Banco do Brasil OR BBAS3 OR agronegócio"
    },
    {
        ticker: "SUZB3",
        empresa: "Suzano",
        setor: "Papel e celulose",
        data: "09 de maio de 2026",
        titulo: "Suzano acompanha ciclo global de celulose e câmbio",
        resumo: "A produtora reage a preços internacionais, demanda externa e variação cambial.",
        artigo:
        [
            "Suzano se destaca pela exposição ao mercado global de celulose, o que torna o ativo fortemente dependente do ciclo de preços internacionais.",
            "Além disso, o câmbio segue importante para a formação de receita e margens. Em momentos de dólar mais forte, o mercado costuma reprecificar o papel com rapidez.",
            "SUZB3 permanece como um ativo clássico para quem acompanha commodities industriais e exportadoras."
        ],
        consulta: "Suzano OR SUZB3 OR celulose"
    }
];
let indice_noticia_selecionada = -1;
function formatar_fonte(data_iso)
{
    if (!data_iso)
    {
        return "Data não informada";
    }
    const data_convertida = new Date(data_iso);
    if (Number.isNaN(data_convertida.getTime()))
    {
        return data_iso;
    }
    return data_convertida.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}
function renderizar_lista_noticias(noticias_filtradas)
{
    const lista_noticias = document.getElementById("lista-noticias");
    const mapa_indices = {};
    noticias_mercado.forEach(function(noticia, indice)
    {
        mapa_indices[noticia.ticker] = indice;
    });
    lista_noticias.innerHTML = noticias_filtradas.map(function(noticia_atual)
    {
        const indice_noticia = mapa_indices[noticia_atual.ticker];
        return `
        <button class="noticia-item" type="button" data-indice="${indice_noticia}">
            <div class="noticia-topo">
                <span class="noticia-ticker">${noticia_atual.ticker}</span>
                <span class="noticia-empresa">${noticia_atual.empresa}</span>
            </div>
            <span class="noticia-data">${noticia_atual.data}</span>
            <strong class="noticia-titulo">${noticia_atual.titulo}</strong>
            <p class="noticia-descricao">${noticia_atual.resumo}</p>
        </button>
    `;
    }).join("");
    lista_noticias.addEventListener("click", async function(evento)
    {
        const item_selecionado = evento.target.closest(".noticia-item");
        if (item_selecionado === null)
        {
            return;
        }
        await selecionar_noticia(Number(item_selecionado.dataset.indice));
    });
}
function renderizar_placeholder(mensagem)
{
    const painel_noticia = document.getElementById("painel-noticia");
    painel_noticia.innerHTML = `
        <div class="noticia-placeholder">
            <span class="noticias-eyebrow">Painel de leitura</span>
            <h2>${mensagem}</h2>
            <p>Coluna da direita abre o artigo completo da base interna assim que a notícia é selecionada.</p>
        </div>
    `;
}
function renderizar_painel(noticia)
{
    const painel_noticia = document.getElementById("painel-noticia");
    const paragrafos_artigo = noticia.artigo.map(function(trecho_atual)
    {
        return `<p>${trecho_atual}</p>`;
    }).join("");
    painel_noticia.innerHTML = `
        <section class="painel-artigo">
            <div class="painel-meta">
                <span class="painel-label">${noticia.ticker}</span>
                <span class="painel-label">${noticia.empresa}</span>
                <span class="painel-label">${noticia.setor}</span>
            </div>
            <span class="noticias-eyebrow">${noticia.data}</span>
            <h2>${noticia.titulo}</h2>
            <p class="painel-resumo">${noticia.resumo}</p>
            <div class="painel-conteudo">
                ${paragrafos_artigo}
            </div>
            <div class="painel-fonte-box">
                <strong>Conteúdo local</strong>
                <div class="painel-fonte-lista">
                    <div class="painel-fonte">
                        <strong>Busca online desativada</strong>
                        <span>O painel usa somente a base interna de notícias do projeto.</span>
                    </div>
                </div>
            </div>
        </section>
    `;
}
function selecionar_noticia(indice_noticia)
{
    const noticia_selecionada = noticias_mercado[indice_noticia];
    if (noticia_selecionada === null)
    {
        return;
    }
    indice_noticia_selecionada = indice_noticia;
    document.querySelectorAll(".noticia-item").forEach(function(item_atual)
    {
        item_atual.classList.toggle("ativo", Number(item_atual.dataset.indice) === indice_noticia);
    });
    renderizar_placeholder(`Carregando ${noticia_selecionada.empresa}...`);
    if (indice_noticia_selecionada !== indice_noticia)
    {
        return;
    }
    renderizar_painel(noticia_selecionada);
}
function iniciar_noticias()
{
    const noticias_filtradas = noticias_mercado;
    renderizar_lista_noticias(noticias_filtradas);
    if (noticias_filtradas.length > 0)
    {
        selecionar_noticia(0);
        return;
    }
    renderizar_placeholder("Selecione uma notícia");
}
inicializar_usuario();
document.addEventListener("DOMContentLoaded", iniciar_noticias);
