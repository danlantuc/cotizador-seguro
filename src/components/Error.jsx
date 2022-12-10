import useCotizador from "../hooks/useCotizador"

// pasamos el error y lo podemos ver en el estado global con el useCotizador

const Error = () => {

    const {error} = useCotizador()

  return (
    <div>
      <p className="border text-center border-red-400 bg-red-100 py-3 text-red-800">  
      {error}</p>
    </div>
  )
}

export default Error