const contenedor = document.getElementById("elementos")

const eventos = data.events
const fechaActual = data.currentDate

crearTarjetas(eventos)

function crearTarjetas(arrayEventos){

    let tarjetas = ""

    for(let evento of arrayEventos){

        tarjetas += `
        
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow">

                <img src="https://picsum.photos/400/200"
                class="card-img-top">

                <div class="card-body d-flex flex-column">

                    <h5 class="card-title">
                        ${evento.name}
                    </h5>

                    <p class="card-text">
                        ${evento.description}
                    </p>

                    <p>
                        <strong>Precio:</strong>
                        $${evento.price}
                    </p>

                    <a href="detalle.html"
                    class="btn btn-dark mt-auto">
                    Ver Detalle
                    </a>

                </div>

            </div>
        </div>

        `
    }

    contenedor.innerHTML = tarjetas
}