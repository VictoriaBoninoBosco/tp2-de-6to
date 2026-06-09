const contenedor = document.getElementById("elementospasados")

const fechaActual = data.currentDate

const eventos = data.events.filter(
    evento => evento.date < fechaActual
)

const buscador = document.getElementById("buscador")

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
    <label>
        <input type="checkbox" value="${categoria}">
        ${categoria}
    </label>
    `
}

contenedorCategorias.innerHTML = checks

const checkboxes =
document.querySelectorAll("#contenedorCategorias input")

buscador.addEventListener("input", filtrarEventos)

for(let checkbox of checkboxes){
    checkbox.addEventListener("change", filtrarEventos)
}

crearTarjetas(eventos)

function filtrarEventos(){

    let texto = buscador.value.toLowerCase()

    let seleccionadas = []

    for(let checkbox of checkboxes){
        if(checkbox.checked){
            seleccionadas.push(checkbox.value)
        }
    }

    let filtrados = eventos.filter(evento => {

        let coincideTexto =
        evento.name.toLowerCase().includes(texto)

        let coincideCategoria =
        seleccionadas.length == 0 ||
        seleccionadas.includes(evento.category)

        return coincideTexto && coincideCategoria
    })

    crearTarjetas(filtrados)
}

function crearTarjetas(arrayEventos) {

    let tarjetas = ""

    for (let evento of arrayEventos) {

        tarjetas += `
        
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow">

                <img src="${evento.image}"
                class="card-img-top">

                <div class="card-body d-flex flex-column">

                    <h6>${evento.date}</h6>

                    <h6>${evento.category}</h6>

                    <h5>${evento.name}</h5>

                    <p>${evento.description}</p>

                    <p>
                        <strong>Precio:</strong>
                        $${evento.price}
                    </p>

                    <a href="detalle.html?id=${evento._id}"
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