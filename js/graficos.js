function check_logado()
{
    if (localStorage.getItem("usuario_logado") === null)
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

const tickers_dados = [
    { ticker: "PETR4", preco_atual: 28.50, volatilidade: 1.2 },
    { ticker: "VALE3", preco_atual: 65.30, volatilidade: 1.0 },
    { ticker: "ITUB4", preco_atual: 32.10, volatilidade: 0.8 },
    { ticker: "WEGE3", preco_atual: 42.80, volatilidade: 0.9 },
    { ticker: "EMBR3", preco_atual: 18.90, volatilidade: 1.5 },
    { ticker: "TOTS3", preco_atual: 25.40, volatilidade: 1.1 },
    { ticker: "PRIO3", preco_atual: 35.20, volatilidade: 1.3 },
    { ticker: "RDOR3", preco_atual: 22.10, volatilidade: 0.7 },
    { ticker: "MGLU3", preco_atual: 8.65, volatilidade: 1.8 },
    { ticker: "VIVT3", preco_atual: 47.50, volatilidade: 0.6 },
    { ticker: "BBAS3", preco_atual: 33.40, volatilidade: 0.9 },
    { ticker: "SUZB3", preco_atual: 38.75, volatilidade: 1.1 }
];

let graficos_ativos = [];

function obter_tickers_disponiveis()
{
    try
    {
        const tickers_salvos = JSON.parse(localStorage.getItem("tickers_seguindo")) || [];

        if (Array.isArray(tickers_salvos) && tickers_salvos.length > 0)
        {
            return tickers_dados.filter(function(item)
            {
                return tickers_salvos.includes(item.ticker);
            });
        }
    }
    catch (erro)
    {
        console.warn("Erro ao carregar tickers salvos:", erro);
    }

    return tickers_dados;
}

function gerar_dados_ticker(ticker)
{
    const dados_ticker = tickers_dados.find(function(item)
    {
        return item.ticker === ticker;
    }) || tickers_dados[0];

    const base = dados_ticker.preco_atual;
    const volatilidade = dados_ticker.volatilidade;
    const seed = ticker.split("").reduce(function(soma, caractere)
    {
        return soma + caractere.charCodeAt(0);
    }, 0);

    return {
        dados_ticker: dados_ticker,
        evolucao: [0, 1, 2, 3, 4].map(function(indice)
        {
            const variacao = ((seed + indice * 17) % 9) - 4;

            return Number((base + variacao * volatilidade * 0.9 + indice * volatilidade * 0.4).toFixed(2));
        }),
        pizza: [
            30 + (seed % 10),
            22 + ((seed + 3) % 8),
            18 + ((seed + 5) % 7),
            20 + ((seed + 7) % 6)
        ],
        desempenho: [
            72 + ((seed + 1) % 18),
            68 + ((seed + 2) % 20),
            70 + ((seed + 3) % 15),
            74 + ((seed + 4) % 16),
            69 + ((seed + 5) % 18),
            67 + ((seed + 6) % 14),
            71 + ((seed + 7) % 17)
        ],
        comparativo_2026: [
            58 + ((seed + 1) % 12),
            61 + ((seed + 2) % 11),
            63 + ((seed + 3) % 10),
            60 + ((seed + 4) % 13),
            64 + ((seed + 5) % 9)
        ]
    };
}

function destruir_graficos()
{
    graficos_ativos.forEach(function(grafico_atual)
    {
        grafico_atual.destroy();
    });

    graficos_ativos = [];
}

function renderizar_graficos(ticker)
{
    destruir_graficos();

    const serie = gerar_dados_ticker(ticker);
    const rotulo_titulo = ticker + " · Portfólio Padrão";

    const contexto_evolucao = document.getElementById("graficoEvolucao").getContext("2d");

    graficos_ativos.push(new Chart(contexto_evolucao, {
        type: "line",
        data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
            datasets: [{
                label: rotulo_titulo,
                data: serie.evolucao,
                borderColor: "#fec901",
                backgroundColor: "rgba(254, 201, 1, 0.1)",
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { family: "Montserrat", size: 12, weight: "600" }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: "rgba(0, 0, 0, 0.05)" }
                }
            }
        }
    }));

    const contexto_pizza = document.getElementById("graficoPizza").getContext("2d");

    graficos_ativos.push(new Chart(contexto_pizza, {
        type: "doughnut",
        data: {
            labels: ["Abertura", "Fechamento", "Volume", "Oscilação"],
            datasets: [{
                label: ticker,
                data: serie.pizza,
                backgroundColor: ["#fec901", "#d4a600", "#1a1a1a", "#b8860b"]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { family: "Montserrat", size: 12, weight: "600" }
                    }
                }
            }
        }
    }));

    const contexto_desempenho = document.getElementById("graficoDesempenho").getContext("2d");

    graficos_ativos.push(new Chart(contexto_desempenho, {
        type: "bar",
        data: {
            labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
            datasets: [{
                label: ticker + " (%)",
                data: serie.desempenho,
                backgroundColor: "#fec901",
                borderColor: "#1a1a1a",
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: "y",
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { family: "Montserrat", size: 12, weight: "600" }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    }));

    const contexto_comparativo = document.getElementById("graficoComparativo").getContext("2d");

    graficos_ativos.push(new Chart(contexto_comparativo, {
        type: "radar",
        data: {
            labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
            datasets: [
                {
                    label: ticker + " 2026",
                    data: serie.comparativo_2026,
                    borderColor: "#fec901",
                    backgroundColor: "rgba(254, 201, 1, 0.2)",
                    borderWidth: 2
                },
                {
                    label: ticker + " 2025",
                    data: serie.comparativo_2026.map(function(valor_atual)
                    {
                        return Math.max(0, valor_atual - 10);
                    }),
                    borderColor: "#1a1a1a",
                    backgroundColor: "rgba(26, 26, 26, 0.1)",
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { family: "Montserrat", size: 12, weight: "600" }
                    }
                }
            }
        }
    }));
}

function iniciar_graficos()
{
    const seletor_tickers = document.getElementById("seletor-ticker-graficos");
    const tickers_disponiveis = obter_tickers_disponiveis();

    seletor_tickers.innerHTML = "";

    tickers_disponiveis.forEach(function(item)
    {
        const opcao = document.createElement("option");

        opcao.value = item.ticker;
        opcao.textContent = item.ticker + " - R$ " + item.preco_atual.toFixed(2).replace(".", ",");

        seletor_tickers.appendChild(opcao);
    });

    const ticker_inicial = tickers_disponiveis.length > 0 ? tickers_disponiveis[0].ticker : tickers_dados[0].ticker;

    seletor_tickers.value = ticker_inicial;
    renderizar_graficos(ticker_inicial);

    seletor_tickers.addEventListener("change", function(evento)
    {
        renderizar_graficos(evento.target.value);
    });
}

document.addEventListener("DOMContentLoaded", iniciar_graficos);
