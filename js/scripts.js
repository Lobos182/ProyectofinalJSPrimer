const agregarAlCarrito = (producto) => {
    carrito.push(producto);
};

const carrito = [];

const productos = [
    { id: 1, titulo: "Zapa niky", precio: 900, categoria: "zapatillas deportivas", stock: 0, imagen: 'https://www.elalmanaque.com/Ene14/fotos/Teclado.jpg' },
    { id: 2, titulo: "zapas adidas", precio: 850, categoria: "zapatillas deportivas", stock: 10, imagen: 'https://www.elalmanaque.com/Ene14/fotos/Teclado.jpg' },
    { id: 3, titulo: "zapas puma", precio: 700, categoria: "zapatillas deportivas", stock: 5, imagen: 'https://www.elalmanaque.com/Ene14/fotos/Teclado.jpg' },
    { id: 4, titulo: "pantalon niky", precio: 600, categoria: "ropa deportiva", stock: 56, imagen: '' },
    { id: 5, titulo: "pantalon rebook", precio: 500, categoria: "ropa deportiva", stock: 0, imagen: 'https://www.elalmanaque.com/Ene14/fotos/Teclado.jpg' },
    { id: 6, titulo: "short niky", precio: 450, categoria: "ropa deportiva", stock: 12, imagen: '' },
];

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
                    <!-- Product price--> $
                    ${elementoDelArray.precio}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
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


function buscarProducto() {
    const nombreProductoBuscado = document.querySelector("#producto-buscado").value.toUpperCase().trim();
    console.log(nombreProductoBuscado);
    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
    });

    console.log(productosEncontrados);
    generarCards(productosEncontrados);
}
