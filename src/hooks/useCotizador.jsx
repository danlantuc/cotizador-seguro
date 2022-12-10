

import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

const useCotizador = () => {
    
    return useContext(CotizadorContext)

}

export default useCotizador


//para crear un Hook primero importamos el useContext , y luego el context q queremos utilizar 
// y luego creamos la funcion que exportamos llamada useCotizador