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

function iniciarGraficos()
{
    // Gráfico de Evolução
    const ctxEvolucao = document.getElementById('graficoEvolucao').getContext('2d');
    new Chart(ctxEvolucao, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
            datasets: [{
                label: 'Crescimento',
                data: [12, 19, 8, 5, 22],
                borderColor: '#fec901',
                backgroundColor: 'rgba(254, 201, 1, 0.1)',
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
                        font: { family: 'Montserrat', size: 12, weight: '600' }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                }
            }
        }
    });

    // Gráfico de Pizza
    const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
    new Chart(ctxPizza, {
        type: 'doughnut',
        data: {
            labels: ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D'],
            datasets: [{
                data: [30, 25, 20, 25],
                backgroundColor: ['#fec901', '#d4a600', '#1a1a1a', '#b8860b']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { family: 'Montserrat', size: 12, weight: '600' }
                    }
                }
            }
        }
    });

    // Gráfico de Desempenho
    const ctxDesempenho = document.getElementById('graficoDesempenho').getContext('2d');
    new Chart(ctxDesempenho, {
        type: 'bar',
        data: {
            labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
            datasets: [{
                label: 'Desempenho (%)',
                data: [85, 92, 78, 95, 88, 76, 82],
                backgroundColor: '#fec901',
                borderColor: '#1a1a1a',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { family: 'Montserrat', size: 12, weight: '600' }
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

    // Gráfico Comparativo
    const ctxComparativo = document.getElementById('graficoComparativo').getContext('2d');
    new Chart(ctxComparativo, {
        type: 'radar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
            datasets: [
                {
                    label: '2026',
                    data: [65, 73, 70, 72, 75],
                    borderColor: '#fec901',
                    backgroundColor: 'rgba(254, 201, 1, 0.2)',
                    borderWidth: 2
                },
                {
                    label: '2025',
                    data: [52, 58, 60, 65, 70],
                    borderColor: '#1a1a1a',
                    backgroundColor: 'rgba(26, 26, 26, 0.1)',
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
                        font: { family: 'Montserrat', size: 12, weight: '600' }
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', iniciarGraficos);