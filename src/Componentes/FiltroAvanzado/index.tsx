import { useContext } from 'react';
import { ContextoGlamping } from '../../Contexto/index'
import { IoCloseSharp } from "react-icons/io5";
import './estilos.css'

const FiltroAvanzado = () => {
  
  const almacenVar = useContext(ContextoGlamping)

  return (
    <aside className={`${almacenVar?.estaAbiertoFiltroAvanzado ? 'contenedorAsideAbierto' : 'contenedorAsideCerrado'}`}>
      <div className='contenedorFiltroAvanzado'>
        <h2>filtros avanzados</h2> 
        <div className='iconoCerrar' onClick={()=>almacenVar?.cerrarFiltroAvanzado()}>
          <IoCloseSharp/>
        </div>
      </div>        
    </aside>
  );
};

export default FiltroAvanzado;