
//usamos la funcion para calcular el año que se eligio del modelo del auto 
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}



//iniciamos la variable vacia de incremento y luego con un switch le vamos aumentando un 30% al casi 1, un 15% al case 2
// y un 5% al case 3 .... luego hacemos un return al incremento
export function calularMarca(marca) {
    let incremento 

    switch(marca){
        case "1": incremento = 1.30;
        break;
        case "2": incremento = 1.15;
        break;
        case "3": incremento = 1.05;
        break;
        default:
            break;
        
        
    }

    return incremento
}

//creamos la funcion para poder sumar el total del seguro si es basico o completo
export function calcularPlan(plan){
    return (plan === "1") ? 1.20 : 1.50 ;
}


//creamos una funcion para formatear el dinero y que solo tenga 2 decimales y $
export function formatearDinero(cantidad){
    return cantidad.toLocaleString('en-US', { style: 'currency',currency:'USD'})
}
