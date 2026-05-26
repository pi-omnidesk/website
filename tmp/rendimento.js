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
function renderizar_seletor_tickers()
{
    const seletor = document.getElementById("seletor_ticker");
    const tickers_json = localStorage.getItem("tickers_seguindo");
    let tickers_selecionados = [];
    if (tickers_json)
    {
        try
        {
            tickers_selecionados = JSON.parse(tickers_json);
        }
        catch (erro)
        {
            console.warn("Erro ao carregar tickers:", erro);
            tickers_selecionados = [];
        }
    }
    const tickers_para_exibir = tickers_selecionados.length > 0
        ? tickers_dados.filter(function(item)
        {
            return tickers_selecionados.includes(item.ticker);
        })
        : tickers_dados;
    tickers_para_exibir.forEach(function(item)
    {
        const opcao = document.createElement("option");
        opcao.value = item.ticker;
        opcao.textContent = item.ticker + " (R$ " + item.preco_atual.toFixed(2) + ")";
        seletor.appendChild(opcao);
    });
}
function obter_preco_simulado(ticker, data_referencia)
{
    const dados_ticker = tickers_dados.find(function(item)
    {
        return item.ticker == ticker;
    });
    if (!dados_ticker)
    {
        return null;
    }
    const data_hoje = new Date();
    const diferenca_dias = Math.floor((data_hoje - data_referencia) / (1000 * 60 * 60 * 24));
    const variacao_percentual = (diferenca_dias * 0.15 * dados_ticker.volatilidade);
    const preco_simulado = dados_ticker.preco_atual * (1 + variacao_percentual / 100);
    return preco_simulado;
}
function calcular_rendimento(evento)
{
    evento.preventDefault();
    const ticker = document.getElementById("seletor_ticker").value;
    const data_inicial_str = document.getElementById("data_inicial").value;
    const data_final_str = document.getElementById("data_final").value;
    const valor_inicial = parseFloat(document.getElementById("valor_inicial").value);
    if (!ticker || !data_inicial_str || !data_final_str || isNaN(valor_inicial) || valor_inicial <= 0)
    {
        alert("Preencha todos os campos corretamente");
        return;
    }
    const data_inicial = new Date(data_inicial_str);
    const data_final = new Date(data_final_str);
    if (data_final < data_inicial)
    {
        alert("A data final deve ser posterior à data inicial");
        return;
    }
    const preco_inicial = obter_preco_simulado(ticker, data_inicial);
    const preco_final = obter_preco_simulado(ticker, data_final);
    if (preco_inicial === null || preco_final === null)
    {
        alert("Ticker não encontrado");
        return;
    }
    const quantidade_acoes = valor_inicial / preco_inicial;
    const valor_final = quantidade_acoes * preco_final;
    const ganho = valor_final - valor_inicial;
    const rentabilidade_percentual = (ganho / valor_inicial) * 100;
    const diferenca_dias = Math.floor((data_final - data_inicial) / (1000 * 60 * 60 * 24));
    exibir_resultados(valor_inicial, valor_final, ganho, rentabilidade_percentual, diferenca_dias);
}
function exibir_resultados(valor_inicial, valor_final, ganho, rentabilidade, dias)
{
    const container = document.getElementById("containerResultados");
    document.getElementById("resultadoValorInicial").textContent = "R$ " + valor_inicial.toFixed(2).replace(".", ",");
    document.getElementById("resultadoValorFinal").textContent = "R$ " + valor_final.toFixed(2).replace(".", ",");
    document.getElementById("resultadoPeriodo").textContent = dias + " dias";
    const sinal_ganho = ganho >= 0 ? "+" : "";
    document.getElementById("resultadoGanho").textContent = sinal_ganho + "R$ " + ganho.toFixed(2).replace(".", ",");
    const sinal_rentabilidade = rentabilidade >= 0 ? "+" : "";
    document.getElementById("resultadoRentabilidade").textContent = sinal_rentabilidade + rentabilidade.toFixed(2).replace(".", ",") + "%";
    if (ganho >= 0)
    {
        document.getElementById("resultadoGanho").style.color = "#28a745";
    }
    else
    {
        document.getElementById("resultadoGanho").style.color = "#dc3545";
    }
    if (rentabilidade >= 0)
    {
        document.getElementById("resultadoRentabilidade").style.color = "#28a745";
    }
    else
    {
        document.getElementById("resultadoRentabilidade").style.color = "#dc3545";
    }
    container.style.display = "grid";
}
function iniciar_rendimento()
{
    renderizar_seletor_tickers();
    const formulario = document.getElementById("formularioRendimento");
    if (formulario)
    {
        formulario.addEventListener("submit", calcular_rendimento);
    }
    const hoje = new Date();
    const ano_passado = new Date(hoje.getFullYear() - 1, hoje.getMonth(), hoje.getDate());
    document.getElementById("data_inicial").value = ano_passado.toISOString().split("T")[0];
    document.getElementById("data_final").value = hoje.toISOString().split("T")[0];
}
document.addEventListener("DOMContentLoaded", iniciar_rendimento);
