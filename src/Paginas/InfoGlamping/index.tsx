import Footer from '../../Componentes/Footer/index'
import NavBar from '../../Componentes/NavBar/index'
import { useContext } from 'react';
import { ContextoGlamping } from '../../Contexto/index'
import { FiShare } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { Link } from 'react-router-dom';
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
        
        {/* ------------------PARTE SUPERIOR------------- */}

        <div className='nombreGlampingSuperior'>
            <h1>{almacenVar?.glampingSeleccionado.title.substring(0, 35)}</h1>
        </div>
          
        <div className='barraSuperior'>

          <div className='ubicacionSuperior'><SlLocationPin/> {almacenVar?.glampingSeleccionado.ciudad} </div>
          
          <div className='barraSuperiorDerecha'>
            <div className='contenedorInfoBarraSuperior'><FiShare/> <span> Compartir </span></div>
            <div className='contenedorInfoBarraSuperior'><FaHeart/> <span> Guardar </span></div>
          </div>
          
        </div>
        

        <div className='barraMedia'>
          
          <div className='contenedorFotoDetalleMax'>
          <Link to="/">
            <div className='iconoRegresar'> <MdOutlineKeyboardArrowLeft/></div> 
          </Link>
             
            <img 
            className='FotoDetalleMax'
            src={almacenVar?.glampingSeleccionado.image}
            alt={almacenVar?.glampingSeleccionado.title} />
            
            <div className='totalFotos'><IoMdPhotos style={{ marginRight: '8px' }}/> 23 Fotos</div>
          </div>

          {/* ------------------IMAGENES------------- */}
          <div>
            <div className='contenedorImagenes'>
              <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>
              <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>
              <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>
              <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>
              <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>            
              <div className='totalFotos'><IoMdPhotos style={{ marginRight: '8px' }}/> 23 Fotos</div>
            </div>

            {/* ------------------INFORMACION GENERAL------------- */}

            <div className='nombreGlampingInferior'>
              <h2>{almacenVar?.glampingSeleccionado.title.substring(0, 35)}</h2>
              <span><SlLocationPin/> {almacenVar?.glampingSeleccionado.ciudad}</span>
            </div>

          </div>

          

          <div className='contenedorInformacionYFiltros'>
            
            <div className='contenedorInformacion'>
              
              <h2>{almacenVar?.glampingSeleccionado.title.substring(0, 35)}</h2>
              
              <div className='descripcionLugar'>
                <h3>Acerca de este lugar</h3>
                <p className={almacenVar?.estaAbiertoAlgo ? 'descripcionLugarAbierto' : 'descripcionLugarCerrado'}>{almacenVar?.glampingSeleccionado.descripcion}</p>          
                
                <span
                  className={almacenVar?.estaAbiertoAlgo ? 'botonAbrirInfo' : 'botonCerrarInfo'}
                  onClick={() => {
                    almacenVar?.estaAbiertoAlgo ? almacenVar?.cerrarAlgo() : almacenVar?.abrirAlgo();
                  }}
                >
                  {almacenVar?.estaAbiertoAlgo ? 'Mostrar Menos' : 'Mostrar Mas'}
              </span>

              </div>
              

              <div className='amenidades'>
                <h3>Caracteristicas y servicios</h3>
                <span>Capacidad: {almacenVar?.glampingSeleccionado.capacidad} huespedes</span>
              </div>
              
              <span>Baño privado:  { almacenVar?.glampingSeleccionado.bano===1 ? 'Si':'No'}</span>
          
            </div>

            <div className='contenedorFiltrosViaje'>
            
              Aqui van los filtros de viaje

              $precios
              y fechas
          
            </div>
            
          </div>  
          

          

        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default InfoGlamping;
