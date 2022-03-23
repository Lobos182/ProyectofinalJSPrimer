const carrito = [];

const productos = [
    { id: 1, titulo: "Zapa niky", precio: 900, categoria: "zapatillas deportivas", stock: 0, imagen: 'https://www.elalmanaque.com/Ene14/fotos/Teclado.jpg' },
    { id: 2, titulo: "zapas adidas", precio: 850, categoria: "zapatillas deportivas", stock: 10, imagen: 'https://www.elalmanaque.com/Ene14/fotos/Teclado.jpg' },
    { id: 3, titulo: "zapas puma", precio: 700, categoria: "zapatillas deportivas", stock: 5, imagen: 'https://www.elalmanaque.com/Ene14/fotos/Teclado.jpg' },
    { id: 4, titulo: "pantalon niky", precio: 600, categoria: "ropa deportiva", stock: 56, imagen: '' },
    { id: 5, titulo: "pantalon rebook", precio: 500, categoria: "ropa deportiva", stock: 0, imagen: 'https://www.elalmanaque.com/Ene14/fotos/Teclado.jpg' },
    { id: 6, titulo: "short niky", precio: 450, categoria: "ropa deportiva", stock: 12, imagen: '' },
];

const agregarAlCarrito = (idProducto) => {
    const valorDeCantidad = document.getElementById(`cantidad-${idProducto}`).value;
    console.log(valorDeCantidad);
    //buscando el prodcuto agregar
    const productoAgregado = productos.find(producto => producto.id === idProducto);
    productoAgregado.cantidad = valorDeCantidad;
    console.log(productoAgregado);
    console.log(productoAgregado.cantidad);
    //agregando al carrito
    carrito.push(productoAgregado);
    //actualizando el storage del carrito
    localStorage.setItem("carrito", JSON.stringify(carrito));

    //actualizando el html
    // document.getElementById("cantidad-prod").innerHTML = "$" + productoAgregado.precio * productoAgregado.cantidad;
    document.getElementById("cantidad-prod").innerHTML = carrito.length;
    // Actualizar stock
    // Volver a generar las cards
};




generarCards(productos);
//<img class="card-img-top" src="${elementoDelArray.imagen === '' ? 'https://aramar.com/wp-content/uploads/2017/05/aramar-suministros-para-el-vidrio-cristal-sin-imagen-disponible.jpg' : elementoDelArray.imagen}" alt="..." />
function generarCards(productosAMostrar) {
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
            ${elementoDelArray.stock > 0 ? 'Esta en venta' : 'out stock'}</div>
            <!-- Product image-->            
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="${elementoDelArray.imagen === '' ? 'https://aramar.com/wp-content/uploads/2017/05/aramar-suministros-para-el-vidrio-cristal-sin-imagen-disponible.jpg' : elementoDelArray.imagen}"
                        class="d-block" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${elementoDelArray.imagen === '' ? 'https://aramar.com/wp-content/uploads/2017/05/aramar-suministros-para-el-vidrio-cristal-sin-imagen-disponible.jpg' : elementoDelArray.imagen}"
                        class="d-block" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${elementoDelArray.imagen === '' ? 'https://aramar.com/wp-content/uploads/2017/05/aramar-suministros-para-el-vidrio-cristal-sin-imagen-disponible.jpg' : elementoDelArray.imagen}"
                        class="d-block" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
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
                 <input class="form-control font-weight-bold" value="1" min="1" id="cantidad-${elementoDelArray.id}" type="number" placeholder="cantidad">
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
                class="btn btn-outline-dark mt-auto" href="#">
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


function suscribirseAlNewsletter() {
    const email = document.getElementById("email").value;
    console.log(email);
    alert("Te Suscribiste correctamente");
    location.reload();
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

    console.log(productosEncontrados);
    generarCards(productosEncontrados);
}
