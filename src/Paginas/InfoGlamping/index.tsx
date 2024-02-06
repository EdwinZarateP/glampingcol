import Footer from '../../Componentes/Footer/index'
import NavBar from '../../Componentes/NavBar/index'
import { useContext } from 'react';
import { ContextoGlamping } from '../../Contexto/index'
import { FiShare } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import './estilos.css'

function InfoGlamping () {
  
  const almacenVar = useContext(ContextoGlamping)

  return (
    <div className="contenedorInfoGlamping">
      <NavBar/>
      
      {/* Creamos la informacion del Glamping seleccionado total */}
      
      <div className='contenedorDetalleGlamping'>

        <div className='barraSuperior'>
       
          <h3>{almacenVar?.glampingSeleccionado.title.substring(0, 35)}</h3>
          <div className='barraSuperiorDerecha'>

            <div className='contenedorInfoBarraSuperior'><FiShare/> <span className='infoBarraSuperior'>Compartir</span></div>
            <div className='contenedorInfoBarraSuperior'><FaHeart/> <span className='infoBarraSuperior'>Guardar</span></div>
          </div>

        </div>
        

        <div className='barraMedia'>

          <div className='contenedorImagenes'>
            
              <img className='fotoDetalle alto' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} />
              <img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} />
              <img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} />
              <img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} />
              <img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} />
              <img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} />
              <img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} />
            
          </div>

        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default InfoGlamping;
