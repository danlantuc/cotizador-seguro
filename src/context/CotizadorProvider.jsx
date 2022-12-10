import { useState , createContext } from 'react'
import { obtenerDiferenciaYear , calularMarca , calcularPlan ,formatearDinero} from '../helpers'

// context provee una forma de pasar datos a travez de components sin tener que pasar props.
const CotizadorContext = createContext()



//creamos el provider que es donde tenemos nuestro estado y algunos effects , 
//es la fuente , de donde vienen los datos. Utilizamos Children por que nos sabemos cuantos componentes
// tendremos dentro de nuestra aplicacion en el APP.js y podemos pasar datos a todos los componentes 

const CotizadorProvider = ({children}) => {

    const [datos , setDatos] = useState ({
        marca:'',
        year:'',
        plan:''

    })

    const [error ,setError] = useState('')
    const [resultado, setResultado ] = useState(0)
    const [cargando , setCargando ] = useState(false)

  
    const handleChangeDatos= e => {
        setDatos({ ...datos , [e.target.name] : e.target.value

        })
    }



//funcion para cotizar seguro, tendremos una base, la diferencia de años , restamos el 3% por cada año

const cotizarSeguro= () => {
    
    //el costo base del seguro y luego le incrementamos con la function (calularmarca)
    let resultado= 2000

    //Obtener la dioferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year)

    //restar el 3% por cada año 
    resultado-= ((diferencia * 3) * resultado) / 100


    //calculo en base a la marca Americano 15% , Europeo 30% y Asiatico 5%
    resultado *= calularMarca(datos.marca)
    
    // si el seguro es basico le sumamos un 20% y si es completo un 50%
    resultado *= calcularPlan(datos.plan) 
    
    // Formatear Dinero para que aparezca en $
    resultado= formatearDinero(resultado)

    //introducimos el state del spinner con un settimeout y el resultado del mismo dentro del spinner
    setCargando(true)
    
    setTimeout( () => {
            setResultado(resultado)
            setCargando(false)
    }, 2000);
    
}






    return(
        <CotizadorContext.Provider 
        value={{ 
            datos,
            handleChangeDatos,
            error,
            setError,
            cotizarSeguro,
            resultado,
            cargando,
         }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export{
    CotizadorProvider
}

export default CotizadorContext