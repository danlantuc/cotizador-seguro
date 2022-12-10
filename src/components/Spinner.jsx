import "../styles/Spinner.css"


//exportamos un spinner de "spinkit" y agregamos el html al return y en la carpeta de styles creamos un archivo
//Spinner.css y luego pegamos toda el css y modificamos el color del spinner (background)

const Spinner = () => {
  return (

    <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
    </div>
  )
}

export default Spinner