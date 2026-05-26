const contenedorElementos = document.getElementById('elementos')

const eventosPasados = data.events.filter(evento =>
    evento.date < data.currentDate
)

mostrarTarjetas(eventosPasados, contenedorElementos)

function mostrarTarjetas(arrayEventos, contenedor){

    let tarjetas = ""

    for(let evento of arrayEventos){

        tarjetas += `
        <div class="col-md-4 mb-4">

            <div class="card h-100">

                <img src="https://picsum.photos/300/200" class="card-img-top">

                <div class="card-body">

                    <h5>${evento.name}</h5>

                    <p>${evento.description}</p>

                    <p>$${evento.price}</p>

                    <a href="detalle.html" class="btn btn-primary">
                        Detalles
                    </a>

                </div>

            </div>

        </div>
        `
    }

    contenedor.innerHTML = tarjetas
}