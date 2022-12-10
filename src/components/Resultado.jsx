import {Fragment,useRef, useCallback, useMemo } from'react'
import useCotizador from "../hooks/useCotizador"
import {MARCAS,PLANES, YEARS} from  '../constants'



const Resultado = () => {

    const { resultado, datos } = useCotizador()
    


    //traemos marca plan y año de datos del provider
    const { marca , plan , year } = datos
    
    const yearRef =  useRef(year)


    //para utilizar los id del arreglo Marcas hacemos un filter sobre id y filtra sobre el id y no la posicion
    const [nombreMarca] = useCallback( 
        MARCAS.filter(m => m.id === Number(marca)), [resultado] 
        )

    const [nombrePlan] = useCallback( 
        PLANES.filter(p => p.id === Number(plan)), [resultado] 
        )


    
    //evitamos que muestre el 0 en la cotizacion, se muestra solo luego del spinner
    if (resultado === 0) return null

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow"> 
        <h2 className="text-gray-700 font-black text-3xl"> Resumen </h2>
    
    <p className="my-2">
        <span className="font-bold">Marca: </span> {nombreMarca.nombre}
    </p>

    <p className="my-2">
        <span className="font-bold">Plan: </span> {nombrePlan.nombre}
    </p>
    
    <p className="my-2">
        <span className="font-bold">Año de Fabricacion: </span> {yearRef.current}
    </p>

    <p className="my-2 text-3xl">
        <span className="font-bold">Total Cotizacion: </span> {resultado}
    </p>
    
    
    </div>

    
  )
}

export default Resultado