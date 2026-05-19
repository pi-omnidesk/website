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

const tickers_disponiveis = [
    { ticker: "PETR4", empresa: "Petrobras" },
    { ticker: "VALE3", empresa: "Vale" },
    { ticker: "ITUB4", empresa: "Itaú Unibanco" },
    { ticker: "WEGE3", empresa: "WEG" },
    { ticker: "EMBR3", empresa: "Embraer" },
    { ticker: "TOTS3", empresa: "TOTVS" },
    { ticker: "PRIO3", empresa: "PRIO" },
    { ticker: "RDOR3", empresa: "Rede D'Or" },
    { ticker: "MGLU3", empresa: "Magazine Luiza" },
    { ticker: "VIVT3", empresa: "Telefônica Brasil" },
    { ticker: "BBAS3", empresa: "Banco do Brasil" },
    { ticker: "SUZB3", empresa: "Suzano" }
];

function carregar_tickers_selecionados()
{
    const tickers_json = localStorage.getItem("tickers_seguindo");

    if (tickers_json)
    {
        return JSON.parse(tickers_json);
    }

    return [];
}

function salvar_tickers_selecionados(tickers)
{
    localStorage.setItem("tickers_seguindo", JSON.stringify(tickers));
}

function renderizar_lista_checkboxes()
{
    const container = document.getElementById("listaCheckboxes");

    const tickers_selecionados = carregar_tickers_selecionados();

    container.innerHTML = "";

    tickers_disponiveis.forEach(function(item, indice)
    {
        const id_checkbox = "checkbox_" + item.ticker;

        const esta_selecionado = tickers_selecionados.includes(item.ticker);

        const div = document.createElement("div");

        div.className = "checkbox-item";

        div.innerHTML = "<input type=\"checkbox\" id=\"" + id_checkbox + "\" name=\"ticker\" value=\"" + item.ticker + "\"" + (esta_selecionado ? " checked" : "") + "><label for=\"" + id_checkbox + "\"><span class=\"ticker\">" + item.ticker + "</span><span class=\"empresa\">" + item.empresa + "</span></label>";

        container.appendChild(div);
    });
}

function obter_tickers_selecionados()
{
    const checkboxes = document.querySelectorAll("input[name=\"ticker\"]:checked");

    const tickers = [];

    checkboxes.forEach(function(checkbox)
    {
        tickers.push(checkbox.value);
    });

    return tickers;
}

function salvar_preferencias()
{
    const tickers = obter_tickers_selecionados();

    if (tickers.length === 0)
    {
        mostrar_mensagem("Selecione pelo menos um ticker", "erro");

        return;
    }

    salvar_tickers_selecionados(tickers);

    mostrar_mensagem("Preferências salvas com sucesso!", "sucesso");

    setTimeout(function()
    {
        location.assign("./home.html");
    }, 1500);
}

function selecionar_todos()
{
    const checkboxes = document.querySelectorAll("input[name=\"ticker\"]");

    const todos_selecionados = Array.from(checkboxes).every(function(checkbox)
    {
        return checkbox.checked;
    });

    checkboxes.forEach(function(checkbox)
    {
        checkbox.checked = !todos_selecionados;
    });
}

function mostrar_mensagem(texto, tipo)
{
    const container = document.getElementById("mensagemStatus");

    container.textContent = texto;

    container.className = "mensagem-status " + tipo;

    setTimeout(function()
    {
        container.className = "mensagem-status";
    }, 3000);
}

function iniciar_personalizacao()
{
    renderizar_lista_checkboxes();

    const botao_salvar = document.getElementById("botaoSalvar");

    const botao_selecionar = document.getElementById("botaoSelecionarTodos");

    if (botao_salvar)
    {
        botao_salvar.addEventListener("click", salvar_preferencias);
    }

    if (botao_selecionar)
    {
        botao_selecionar.addEventListener("click", selecionar_todos);
    }
}

document.addEventListener("DOMContentLoaded", iniciar_personalizacao);
