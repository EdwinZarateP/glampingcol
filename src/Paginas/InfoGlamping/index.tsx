import Footer from '../../Componentes/Footer/index'
import NavBar from '../../Componentes/NavBar/index'
import { useContext } from 'react';
import { ContextoGlamping } from '../../Contexto/index'
import { FiShare } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import './estilos.css'

function InfoGlamping () {
  
  const almacenVar = useContext(ContextoGlamping)

  return (
    <div className="contenedorInfoGlamping">
      
      <div className='navBar'>

      <NavBar/>

      </div>
      
      
      {/* Creamos la informacion del Glamping seleccionado total */}
      
      <div className='contenedorDetalleGlamping'>

        <div className='barraSuperior'>

          <div className='nombreGlampingSuperior'>
            <h3>{almacenVar?.glampingSeleccionado.title.substring(0, 35)}</h3>
          </div>

          <div className='barraSuperiorDerecha'>
            <div className='contenedorInfoBarraSuperior'><FiShare/> <span> Compartir </span></div>
            <div className='contenedorInfoBarraSuperior'><FaHeart/> <span> Guardar </span></div>
          </div>

        </div>
        

        <div className='barraMedia'>
          
          <div className='contenedorFotoDetalleMax'>
          <div className='iconoRegresar'> <MdOutlineKeyboardArrowLeft/></div>          
          <div className='iconoCorazon'> <FaHeart/></div>
          <div className='iconoCompartir  '> <FiShare/> </div>

          
            <img 
            className='FotoDetalleMax'
            src={almacenVar?.glampingSeleccionado.image}
            alt={almacenVar?.glampingSeleccionado.title} />

          </div>
          
          <section>
          <div className='contenedorImagenes'>
            <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>
            <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>
            <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>
            <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>
            <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>            
          </div>

          <div className='nombreGlampingInferior'>
            <h3>{almacenVar?.glampingSeleccionado.title.substring(0, 35)}</h3>
          </div>

          <div className='informacionGeneralGlamping'>
            <span><SlLocationPin/> La Vega, Cundinamarca (Colombia) </span>
            <span>2 huespedes</span>
            <span>1 habitacion</span>
            <span>1 baño privado</span>
          </div>

          </section>

        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default InfoGlamping;
