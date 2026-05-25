<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?php echo strtoupper($pagina); ?></title>
        <?php
            include __DIR__ . '/links-css.php';
        ?>
        <link rel="stylesheet" href="/css/<?php echo $pagina; ?>.css"/>
    </head>
    <body>
        <?php
            if ($pagina != 'login' && $pagina != 'cadastro')
            {
                include __DIR__ . '/nav.php';
            }
            include __DIR__ . "/../paginas/$pagina.php";
            if ($pagina != 'login' && $pagina != 'cadastro')
            {
                include __DIR__ . '/footer.php';
            }
            include __DIR__ . '/links-js.php';
        ?>
        <script src="/js/<?php echo $pagina; ?>.js"></script>
    </body>
</html>