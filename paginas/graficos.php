<main>
    <div class="filtro-graficos">
        <label for="seletor-ticker-graficos">Ticker dos gráficos</label>
        <select id="seletor-ticker-graficos"></select>
    </div>
    <section id="apresentacao">
        <div class="grafico-container">
            <div class="grafico-titulo">Evolução Mensal</div>
            <canvas id="graficoEvolucao"></canvas>
        </div>
        <div class="grafico-container">
            <div class="grafico-titulo">Distribuição por Categoria</div>
            <canvas id="graficoPizza"></canvas>
        </div>
        <div class="grafico-container">
            <div class="grafico-titulo">Desempenho Semanal</div>
            <canvas id="graficoDesempenho"></canvas>
        </div>
        <div class="grafico-container">
            <div class="grafico-titulo">Comparativo Trimestral</div>
            <canvas id="graficoComparativo"></canvas>
        </div>
    </section>
</main>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
