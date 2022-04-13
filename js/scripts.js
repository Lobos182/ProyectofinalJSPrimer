// const productos = [
//     { id: 1, titulo: "Dinosaurio Flexible", precio: 900, categoria: "Animales", stock: 1, imagen: 'images/productos/dino1.jpg', imagen2: 'images/productos/dino2.jpg', imagen3: 'images/productos/dino3.jpg' },
//     { id: 2, titulo: "Estrella", precio: 850, categoria: "accesorios", stock: 10, imagen: 'images/productos/estrella1.jpg', imagen2: 'images/productos/estrella2.jpg', imagen3: 'images/productos/estrella3.jpg' },
//     { id: 3, titulo: "Pokebola", precio: 700, categoria: "organizadores", stock: 5, imagen: 'images/productos/pokebola1.jpg', imagen2: 'images/productos/pokebola2.jpg', imagen3: 'images/productos/pokebola3.jpg' },
//     { id: 4, titulo: "Pulpo flexible", precio: 600, categoria: "animales", stock: 56, imagen: 'images/productos/pulpo1.jpg', imagen2: 'images/productos/pulpo2.jpg', imagen3: 'images/productos/pulpo3.jpg' },
//     { id: 5, titulo: "Soporte Celular/Tablet", precio: 500, categoria: "accesorios", stock: 0, imagen: 'images/productos/soportecelu1.jpg', imagen2: 'images/productos/soportecelu2.jpg', imagen3: 'images/productos/soportecelu3.jpg' },
//     { id: 6, titulo: "Darth Vader", precio: 450, categoria: "muñecos", stock: 12, imagen: 'images/productos/vader1.jpg', imagen2: 'images/productos/vader2.jpg', imagen3: 'images/productos/vader3.jpg' },
//     { id: 7, titulo: "Otro", precio: 450, categoria: "muñecos", stock: 0, imagen: '', imagen2: '', imagen3: '' },
//     { id: 8, titulo: "Otro", precio: 450, categoria: "muñecos", stock: 0, imagen: '', imagen2: '', imagen3: '' },
// ];



const agregarAlCarrito = (idProducto) => {
    const valorDeCantidad = document.getElementById(`cantidad-${idProducto}`).value;

    //buscando el prodcuto agregar
    const productoAgregado = productos.find(producto => producto.id === idProducto);
    productoAgregado.cantidad = valorDeCantidad;

    //agregando al carrito
    carrito.push(productoAgregado);

    //actualizando el storage del carrito
    localStorage.setItem("carrito", JSON.stringify(carrito));

    //actualizando el html
    // document.getElementById("cantidad-prod").innerHTML = "$" + productoAgregado.precio * productoAgregado.cantidad;
    document.getElementById("cantidad-prod").innerHTML = carrito.length;
    // Actualizar stock
    // Volver a generar las cards

    Toastify({
        text: `Agregaste ${productoAgregado.titulo}`,
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();


};

fetch("/data.json")
    .then((response) => response.json())
    .then((data) => generarCards(data.productos));


//generarCards(productos);

function generarCards(productosAMostrar) {
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="col mb-5">
        <div class="card" style="width: 18rem;">
            <!-- Ponemos si hay o no Stock-->
            <div class="badge bg-dark badge-pill text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
            ${elementoDelArray.stock > 0 ? 'Hay Stock' : 'No Hay stock'}</div>
            <!-- Carrousel de imagenes-->          
            <div id="carouselExampleIndicators${elementoDelArray.id}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators${elementoDelArray.id}" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators${elementoDelArray.id}" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators${elementoDelArray.id}" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner card-img-top">
                <div class="carousel-item active">
                    <img src="${elementoDelArray.imagen === '' ? 'images/productos/sinimagen.jpg' : elementoDelArray.imagen}"
                        class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${elementoDelArray.imagen2 === '' ? 'images/productos/sinimagen.jpg' : elementoDelArray.imagen2}"
                        class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${elementoDelArray.imagen3 === '' ? 'images/productos/sinimagen.jpg' : elementoDelArray.imagen3}"
                        class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${elementoDelArray.id}"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${elementoDelArray.id}"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>                       
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${elementoDelArray.titulo}</h5>
                    <!-- Product price--> 
             <div class="input-group">
                 <input ${elementoDelArray.stock > 0 ? '' : 'disabled'} class="form-control font-weight-bold" value="1" min="1" id="cantidad-${elementoDelArray.id}" type="number" placeholder="cantidad">
                <div class="input-group-append">
                    <span class="input-group-text font-weight-bold">$${elementoDelArray.precio}</span>
                </div>
            </div>              

                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><button 
                onclick="agregarAlCarrito(${elementoDelArray.id})"
                class="btn btn-outline-dark mt-auto btn-info
                ${elementoDelArray.stock > 0 ? '' : 'disabled'}"  href="#">
                Agregar al Carrito
                 </button>
            </div>
            </div>
        </div>
    </div>`;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);

}



function mostrarCardsEnElHTML(cards) {
    document.getElementById("listado-productos").innerHTML = cards;
};

const miCarritoSinDuplicados = carrito.reduce((acumulador, valorActual) => {
    const elementoYaExiste = acumulador.find(elemento => elemento.id === valorActual.id);
    if (elementoYaExiste) {
        return acumulador.map((elemento) => {
            if (elemento.id === valorActual.id) {
                return {
                    ...elemento,
                    cantidad: elemento.cantidad + valorActual.cantidad

                }
            }
            return elemento;
        });
    }

    return [...acumulador, valorActual];
}, []);

for (let i = 0; i < miCarritoSinDuplicados.length; i++) {
    miCarritoSinDuplicados[i].precioT = miCarritoSinDuplicados[i].precio * miCarritoSinDuplicados[i].cantidad;
}


generarTablaCarrito(miCarritoSinDuplicados);


function generarTablaCarrito(CarritoAMostrar) {
    let acumuladorDeTabla = ``;
    CarritoAMostrar.forEach((carrito) => {
        acumuladorDeTabla += ` <tr>
        <th scope="row">${carrito.id}</th>
        <td>${carrito.titulo}</td>
        <td>${carrito.precio}</td>
        <td>${carrito.cantidad}</td>
        <td>${carrito.precioT}</td>
      </tr>  `;
    });
    mostrarTablaEnModal(acumuladorDeTabla);

}

function mostrarTablaEnModal(tablaCarrito) {
    document.getElementById("tabla-carrito").innerHTML = tablaCarrito;
};



function suscribirseAlNewsletter() {
    const email = document.getElementById("email").value;
    console.log(email);
    swal({
        title: `${email} te suscrbiste correctamente`,
        text: "MUCHAS GRACIAS!!",
        icon: "success",
        button: "Cerrar",
    })
        .then((value) => { location.reload() });

}

/* var inicio = 1; //se inicializa una variable en 0

function aumentar() { // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar

    var cantidad = document.getElementById('cantidad').value = ++inicio; //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.

    const valorDeCantidad1 = document.getElementById(`cantidad-${idProducto}`).value;
    console.log(valorDeCantidad1);
} */


function buscarProducto() {
    const nombreProductoBuscado = document.querySelector("#producto-buscado").value.toUpperCase().trim();
    console.log(nombreProductoBuscado);
    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
    });

    //console.log(productosEncontrados);
    generarCards(productosEncontrados);
}


