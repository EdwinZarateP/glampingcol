import logo from '../../Imagenes/logoColor.png';
import './estilos.css'
import { BiWorld } from "react-icons/bi";
import { FiMenu, FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { GiCampingTent } from "react-icons/gi";
import { TbFilterSearch } from "react-icons/tb";

const NavBar = () => {
  return (
    <div className='barNav'>

      {/* Parte Izquierda */}
        <div className="contenedorizquierdo">
          <div className="logoPrincipal">
              <img src={logo} />
          </div>

          <div className="logoTienda">
            <GiCampingTent />
          </div>

        </div>

        {/* Parte media */}
        <div className='contenedorMedio'>

          <input
            className='inputmedio'
            type='search'
            placeholder='Dónde'
          />

        <div className='contenedorMedioBotones'>
                 
          <button>Tiempo</button>
                 
          <button>Quién cuantos</button>

        </div>

        <div className='lupaBusqueda'>
          <FiSearch />
        </div>

        </div>

        {/* Parte derecha */}
        <div className='contenedorderecho'>
          <p>Ofrece tu Glamping </p>
            <BiWorld />
        <div className='contenedorMenu'>
          <FiMenu />
          <AiOutlineUser/>
        </div>
                
        </div>

        {/* Parte derecha multifiltro */}
        <div className='multifiltroNav'>
        <TbFilterSearch />  

        </div>

      </div>
    );
};

export default NavBar;