const Aros = {
nombre: "aros",
precio: 1000,
}

const Anillos = {
nombre: "anillos",
precio: 2000,}

const Pulseras ={
nombre: "pulseras",
precio: 3000,}

const productos = [Aros, Anillos, Pulseras]

 const aplicarDescuento = (descuento) => (precio) =>precio*(1-descuento/100);

 const carrito = []

 let seguirComprando = true;

 while(seguirComprando){
const seleccion = prompt("¿Que producto desea comprar? \n Aros \n Anillos \n Pulseras");

const productoSeleccionado = productos.find( (producto) => producto.nombre.toLowerCase() === seleccion.toLowerCase());

if (productoSeleccionado){
carrito.push(productoSeleccionado);
const seguirSeleccionando = prompt ("Producto agregado exitosamente. ¿Desea seguir comprando? Si o No ");
seguirComprando = seguirSeleccionando.toLowerCase() === "si";
}
else{
alert("producto no encontrado")
}
}

const precioTotal=
carrito.reduce((total,producto) => total + producto.precio, 0);

const precioFinal =
carrito.length > 2?
aplicarDescuento(10)(precioTotal):precioTotal;

alert(`El precio total de su compra es de: $${precioFinal}`);
