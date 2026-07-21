fetch("./js/eventos.json")
.then(response => response.json())
.then(data => {

    const eventos = data.events
    const fechaActual = data.currentDate

    const pasados = eventos.filter(evento => evento.date < fechaActual)
    const futuros = eventos.filter(evento => evento.date > fechaActual)

    // TABLA GENERAL

    const mayorAsistencia = [...pasados].sort(
        (a, b) =>
        (b.assistance / b.capacity) - (a.assistance / a.capacity)
    )[0]

    const menorAsistencia = [...pasados].sort(
        (a, b) =>
        (a.assistance / a.capacity) - (b.assistance / b.capacity)
    )[0]

    const mayorCapacidad = [...eventos].sort(
        (a, b) => b.capacity - a.capacity
    )[0]

    document.getElementById("tablaGeneral").innerHTML = `
        <tr>
            <td>${mayorAsistencia.name}</td>
            <td>${menorAsistencia.name}</td>
            <td>${mayorCapacidad.name}</td>
        </tr>
    `

    // CATEGORIAS UNICAS

    const categorias = [...new Set(
        eventos.map(evento => evento.category)
    )]

    // TABLA FUTUROS

    let tablaFuturos = ""

    categorias.forEach(categoria => {

        const eventosCategoria = futuros.filter(
            evento => evento.category === categoria
        )

        if (eventosCategoria.length > 0) {

            const ingresos = eventosCategoria.reduce(
                (total, evento) =>
                total + (evento.price * evento.estimate),
                0
            )

            const porcentaje = eventosCategoria.reduce(
                (total, evento) =>
                total + ((evento.estimate / evento.capacity) * 100),
                0
            ) / eventosCategoria.length

            tablaFuturos += `
                <tr>
                    <td>${categoria}</td>
                    <td>$${ingresos}</td>
                    <td>${porcentaje.toFixed(2)}%</td>
                </tr>
            `
        }
    })

    document.getElementById("tablaFuturos").innerHTML = tablaFuturos

    // TABLA PASADOS

    let tablaPasados = ""

    categorias.forEach(categoria => {

        const eventosCategoria = pasados.filter(
            evento => evento.category === categoria
        )

        if (eventosCategoria.length > 0) {

            const ingresos = eventosCategoria.reduce(
                (total, evento) =>
                total + (evento.price * evento.assistance),
                0
            )

            const porcentaje = eventosCategoria.reduce(
                (total, evento) =>
                total + ((evento.assistance / evento.capacity) * 100),
                0
            ) / eventosCategoria.length

            tablaPasados += `
                <tr>
                    <td>${categoria}</td>
                    <td>$${ingresos}</td>
                    <td>${porcentaje.toFixed(2)}%</td>
                </tr>
            `
        }
    })

    document.getElementById("tablaPasados").innerHTML = tablaPasados

})
.catch(error => console.log(error))