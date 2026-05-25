<?php
$rota = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$rota = trim($rota, '/ ');
if ($rota === '')
{
    $segmentos = [];
}
else
{
    $segmentos = explode('/', $rota);
}
if (empty($segmentos))
{
    $pagina = 'login';
}
else
{
    $pagina = $segmentos[0];
}
$secoes = array_slice($segmentos, 1);
require_once './rotas.php';
if (in_array($pagina, $rotas_arquivos))
{
    if (empty($secoes) || $secoes[0] === '')
    {
        include './sistema/404.php';
        exit;
    }
    $arquivo = "./$pagina/{$secoes[0]}";
    if (!is_file($arquivo))
    {
        include './sistema/404.php';
        exit;
    }
    $extensao = strtolower(pathinfo($arquivo, PATHINFO_EXTENSION));
    if ($extensao === 'css')
    {
        header('content-type: text/css; charset=utf-8');
    }
    else if ($extensao === 'js')
    {
        header('content-type: application/javascript; charset=utf-8');
    }
    else if (in_array($extensao, ['png']))
    {
        header('content-type: ' . mime_content_type($arquivo));
    }
    include $arquivo;
    exit;
}
else if (in_array($pagina, $paginas_disponiveis))
{
    include "./paginas/$pagina.php";
    exit;
}
else
{
    include './sistema/404.php';
    exit;
}
?>