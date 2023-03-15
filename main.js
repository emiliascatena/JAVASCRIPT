

/* calcular el monto de la cuota mensual del prestamos a solicitar*/

do {

    function calcularEdadUsuario (anioActual,anioNacimiento){
        return anioActual-anioNacimiento;
       }
    
       const anioActual= Number(prompt('¿En que año estamos?'));
       const anioNacimiento= Number(prompt ('¿En que año naciste?'));
       const EdadUsuario = calcularEdadUsuario (anioActual, anioNacimiento);
       alert ('tu edad es '+ EdadUsuario)
    
       if (EdadUsuario > 18){
    alert ('acceso permitido');}
    else{
    alert ('acceso no permitido para menores de edad')}
    
    
    function calcularCuotaMensual (montoTotalPrestamo, _porcentajeInteresmensual,cantidadDeCuotas){
    return montoTotalPrestamo / cantidadDeCuotas + _porcentajeInteresMensual ;
    }
    
    const montoTotalPrestamo= Number(prompt('ingrese el valor del prestamo a solicitar'));
    const cantidadDeCuotas= prompt('¿En cuantas cuotas quiere sacar el prestamo?');
    const cuotaMensualSinInteres= montoTotalPrestamo/cantidadDeCuotas;
    const _porcentajeInteresMensual= cuotaMensualSinInteres*0.07;
    const cuotaMensual= calcularCuotaMensual (montoTotalPrestamo,_porcentajeInteresMensual,cantidadDeCuotas);
    
    alert('las cuotas mensuales a abonar serán de ' + cuotaMensual);    

rta= prompt ("Escriba 'ESC' para salir o cualquier cosa para continuar")
} while (rta != 'ESC')




