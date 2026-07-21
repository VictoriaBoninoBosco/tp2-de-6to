fetch("./js/eventos.json")
.then(response => response.json())
.then(data => {

    const id = new URLSearchParams(window.location.search).get("id")

    const evento = data.events.find(
        evento => evento._id == id
    )

    const contenedor = document.getElementById("detalleEvento")

    contenedor.innerHTML = `
        <div class="card shadow">

            <img src="${evento.image}" class="card-img-top">

            <div class="card-body">

                <h2>${evento.name}</h2>

                <p>${evento.descriptionxx}</p>

                <p><strong>Categoría:</strong> ${evento.category}</p>

                <p><strong>Fecha:</strong> ${evento.date}</p>

                <p><strong>Lugar:</strong> ${evento.place}</p>

                <p><strong>Capacidad:</strong> ${evento.capacity}</p>

                <p><strong>Asistencia / Estimación:</strong>
                ${evento.assistance || evento.estimate}</p>

                <p><strong>Precio:</strong> $${evento.price}</p>

            </div>

        </div>
    `
})