<?php

$rota = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$rota = trim($rota, '/ ');

if ($rota == '')
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
    include_once "./$pagina/$secoes[0]";
    exit;
}
if (in_array($pagina, $paginas_disponiveis))
{
    include_once "./paginas/$pagina.php";
    exit;
}
else
{
    include_once './sistema/404.php';
    exit;
}

?>