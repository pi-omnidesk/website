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

function iniciar_graficos()
{
    const rotulo_titulo = "Portfólio Padrão";

    // GRÁFICO DE EVOLUÇÃO
    const contexto_evolucao = document.getElementById("graficoEvolucao").getContext("2d");

    new Chart(contexto_evolucao, {
        type: "line",
        data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
            datasets: [{
                label: rotulo_titulo,
                data: [12, 19, 8, 5, 22],
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

    const categorias_pizza = ["Categoria A", "Categoria B", "Categoria C", "Categoria D"];

    const dados_pizza = [30, 25, 20, 25];

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
                data: [85, 92, 78, 95, 88, 76, 82],
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
                    data: [65, 73, 70, 72, 75],
                    borderColor: "#fec901",
                    backgroundColor: "rgba(254, 201, 1, 0.2)",
                    borderWidth: 2
                },
                {
                    label: "2025",
                    data: [52, 58, 60, 65, 70],
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
