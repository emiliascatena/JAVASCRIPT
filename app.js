class producto {
  constructor(id, nombre, precio, imagen, stock) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.imagen = imagen
    this.stock = stock
  }
}

class ProductoController{   
constructor(){
  this.listaProductos= []
  this.contenedor_productos = document.getElementById("contenedor_productos")
}

subirProductos(){
  this.listaProductos = [
  new producto(2, "Esclava de Plata", 3000, "./assets/imagenes/pulsera2.jpg", 5),
  new producto(3, "Anillo plata inflada", 2300, "./assets/imagenes/anillo2.jpg", 8),
  new producto(4, "Aro de Plata", 2600, "./assets/imagenes/aros1.jpg", 4),
  new producto(5, "Pulsera de Plata", 2800, "./assets/imagenes/pulsera3.jpg", 12),
  new producto(6, "Anillo de Plata", 1800, "./assets/imagenes/anillo3.jpg", 6)
  ]
}


mostrarEnDom(){
this.listaProductos.forEach(producto => {
  this.contenedor_productos.innerHTML += `
  <div class="card" style="width: 18rem;">
      <img src="${producto.imagen}" class="card-img-top">
      <div class="card-body text-center">
        <h5 class="textoTarjeta card-title">${producto.nombre}</h5>
        <p class=>Precio: $${producto.precio}</p>
        <a href="#" class="textoTarjeta btn btn-primary" id="cpu-${producto.id}" class ="textoTarjeta btn-primaty">Agregar al Carrito</a>
      </div>
  </div> `
    })
  }

darEventoClickAProductos(ControladorCarrito){
    this.listaProductos.forEach(producto => {
    const btnAP = document.getElementById (`cpu-${producto.id}`)
    btnAP.addEventListener("click", () => {
          ControladorCarrito.agregar(producto)
          ControladorCarrito.guardarEnStorage()
        })
     })
  }
}

class CarritoController {
  constructor() {
    this.listaCarrito = []
    this.contenedor_carrito = document.getElementById("contenedor_carrito")
  }
  agregar(producto) {
    this.listaCarrito.push(producto)
  }
 
  guardarEnStorage() {
    let listaCarritoJSON = JSON.stringify(this.listaCarrito)
    localStorage.setItem("listaCarrito", listaCarritoJSON)
  }

  levantarDeLocalStorage() {
    this.listaCarrito = JSON.parse(localStorage.getItem("listaCarrito")) || []
    if(this.listaCarrito.length > 0){
      this.mostrarEnDom()
  }
}
  vaciarContenedor_Carrito() {
    this.contenedor_carrito.innerHTML = ""
  }

  mostrarEnDom() {
  this.vaciarContenedor_Carrito()
   this.listaCarrito.forEach(producto => {
    this.contenedor_carrito.innerHTML += 
      `<div class="card mb-3" style ="max-width: 540px;">
        <div class ="row g-0">
          <div class ="col-md-4">
          <img src="${producto.imagen}" class="img-fluid rounded-start">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text"> Precio: $${producto.precio}</p>  
              <p class="card-text"> Stock: ${producto.stock}</p>
              </div>
            </div>
          </div>   
        </div>`
      })
    }
  }

const ControladorProductos = new ProductoController ()
ControladorProductos.subirProductos ()

const ControladorCarrito = new CarritoController ()
ControladorCarrito.levantarDeLocalStorage()

  
  ControladorProductos.mostrarEnDom()
  ControladorProductos.darEventoClickAProductos(ControladorCarrito)
