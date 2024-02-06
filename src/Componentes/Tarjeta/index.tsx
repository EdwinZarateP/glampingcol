import './estilos.css'
import { FaHeart, FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Tarjeta = (data: any) => {

  

  return (
    <div className="contenedorTarjeta">

      <figure className='contenedorImagen'>
        <img className='foto' src={data.data.image} alt={data.data.title} />
        
        <div className='favorito'>
          <FaHeart />
        </div>

        {/* Flecha para desplazar a izquierda iconos */}
        <div className="flecha-izquierda-foto" >
              <MdOutlineKeyboardArrowLeft />
        </div>

        {/* Flecha para desplazar a derecha fotos */}
        <div className="flecha-derecha-foto" >
              <MdOutlineKeyboardArrowRight />
        </div>
        
      </figure>
      <p className='informacion'>
        
        <div className='informacionSuperior'>
        <span>{data.data.title.substring(0, 35)}</span>
        <span><FaStar /> 4.5 </span>
        </div>

        <div className='informacionMedia'>
        <span>a 300 Km</span>
        <span>Fecha</span>
        </div>
        
        <div className='informacionBaja'>
          <span>${data.data.price}</span>
        </div>
        
      </p>
        
    </div>
  );
};

export default Tarjeta;