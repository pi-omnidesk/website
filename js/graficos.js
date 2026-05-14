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

function iniciar_graficos()
{
    const tickers_json = localStorage.getItem("tickers_seguindo");

    let tickers_seguindo = [];

    if (tickers_json)
    {
        try
        {
            tickers_seguindo = JSON.parse(tickers_json);
        }
        catch (erro)
        {
            console.warn("Erro ao carregar tickers:", erro);

            tickers_seguindo = [];
        }
    }

    const rotulo_titulo = tickers_seguindo.length > 0
        ? `Portfólio Personalizado (${tickers_seguindo.length} tickers)`
        : "Portfólio Padrão";

    // GRÁFICO DE EVOLUÇÃO
    const contexto_evolucao = document.getElementById("graficoEvolucao").getContext("2d");

    new Chart(contexto_evolucao, {
        type: "line",
        data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
            datasets: [{
                label: rotulo_titulo,
                data: tickers_seguindo.length > 0 ? [18, 22, 16, 20, 28] : [12, 19, 8, 5, 22],
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
    });

    // GRÁFICO DE PIZZA
    const contexto_pizza = document.getElementById("graficoPizza").getContext("2d");

    const categorias_pizza = tickers_seguindo.length > 0
        ? tickers_seguindo.slice(0, 4).map(function(ticker) { return ticker; })
        : ["Categoria A", "Categoria B", "Categoria C", "Categoria D"];

    const dados_pizza = tickers_seguindo.length > 0
        ? [22, 18, 25, 20].slice(0, categorias_pizza.length)
        : [30, 25, 20, 25];

    new Chart(contexto_pizza, {
        type: "doughnut",
        data: {
            labels: categorias_pizza,
            datasets: [{
                data: dados_pizza,
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
    });

    // GRÁFICO DE DESEMPENHO
    const contexto_desempenho = document.getElementById("graficoDesempenho").getContext("2d");

    new Chart(contexto_desempenho, {
        type: "bar",
        data: {
            labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
            datasets: [{
                label: "Desempenho (%)",
                data: tickers_seguindo.length > 0 ? [88, 94, 82, 96, 91, 79, 85] : [85, 92, 78, 95, 88, 76, 82],
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
    });

    // GRÁFICO COMPARATIVO
    const contexto_comparativo = document.getElementById("graficoComparativo").getContext("2d");

    new Chart(contexto_comparativo, {
        type: "radar",
        data: {
            labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
            datasets: [
                {
                    label: "2026",
                    data: tickers_seguindo.length > 0 ? [70, 78, 75, 77, 80] : [65, 73, 70, 72, 75],
                    borderColor: "#fec901",
                    backgroundColor: "rgba(254, 201, 1, 0.2)",
                    borderWidth: 2
                },
                {
                    label: "2025",
                    data: tickers_seguindo.length > 0 ? [58, 64, 67, 72, 75] : [52, 58, 60, 65, 70],
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
    });
}

document.addEventListener("DOMContentLoaded", iniciar_graficos);