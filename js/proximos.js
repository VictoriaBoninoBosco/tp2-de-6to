<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos Próximos</title>

    <link rel="stylesheet" href="./css/stile.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

    <header>
        <h1>Mundo Eventos</h1>
    </header>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <div class="container">

            <a class="navbar-brand" href="index.html">
                Inicio
            </a>

            <div>

                <a class="nav-link d-inline text-white" href="proximos.html">
                    Próximos
                </a>

                <a class="nav-link d-inline text-white" href="pasados.html">
                    Pasados
                </a>

                <a class="nav-link d-inline text-white" href="contacto.html">
                    Contacto
                </a>

                <a class="nav-link d-inline text-white" href="estadisticas.html">
                    Estadísticas
                </a>

            </div>

        </div>

    </nav>

    <main class="container mt-4">

        <h2 class="text-center mb-4">
            Eventos Próximos
        </h2>

        <div class="row" id="elementos">

        </div>

    </main>

    <footer>
        <p>aguante messi</p>
    </footer>

    <script src="./js/data.js"></script>
    <script src="./js/proximos.js"></script>

</body>

</html>