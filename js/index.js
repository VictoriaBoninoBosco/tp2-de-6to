const contenedor = document.getElementById("elementos")

const eventos = data.events

const contenedorCategorias =
document.getElementById("contenedorCategorias")

const categorias = [
    "Musica",
    "Deportes",
    "Gastronomia",
    "Cultura y Arte",
    "Ferias y Festivales",
    "Tecnologia y Educación"
]

let checks = ""

for(let categoria of categorias){

    checks += `
    
    <label class="me-3">
        <input type="checkbox" value="${categoria}">
        ${categoria}
    </label>

    `
}

contenedorCategorias.innerHTML = checks

const checkboxes =
document.querySelectorAll(
"#contenedorCategorias input"
)

for(let checkbox of checkboxes){
    checkbox.addEventListener(
        "change",
        filtrarEventos
    )
}

const buscador = document.getElementById("buscador")

buscador.addEventListener("input", filtrarEventos)

crearTarjetas(eventos)

function filtrarEventos(){

    const texto =
    buscador.value.toLowerCase()

    const seleccionadas = []

    for(let checkbox of checkboxes){

        if(checkbox.checked){
            seleccionadas.push(
                checkbox.value
            )
        }
    }

    const filtrados = eventos.filter(evento => {

        const coincideBusqueda =
        evento.name.toLowerCase().includes(texto)

        const coincideCategoria =
        seleccionadas.length === 0 ||
        seleccionadas.includes(evento.category)

        return coincideBusqueda &&
        coincideCategoria

    })

    crearTarjetas(filtrados)
}

function crearTarjetas(arrayEventos){

    let tarjetas = ""

    for(let evento of arrayEventos){

        tarjetas += `
        
        <div class="col-md-4 mb-4">

            <div class="card h-100 shadow">

                <img
                src="${evento.image}"
                class="card-img-top">

                <div class="card-body d-flex flex-column">

                    <h6>
                        ${evento.date}
                    </h6>

                    <h6>
                        ${evento.category}
                    </h6>

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