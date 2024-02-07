import NavBar from '../../Componentes/NavBar/index'
import Filtros from '../../Componentes/Filtros/index'
import Footer from '../../Componentes/Footer/index'
import Tarjeta from '../../Componentes/Tarjeta/index'
import FiltroAvanzado from '../../Componentes/FiltroAvanzado/index'
import { useState , useEffect} from 'react' 
import './estilos.css'

function Home () {

  const [items, setItems] = useState<any>(null);
  
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')        
    .then(response=> response.json())
    .then(datos => setItems (datos))
  },[])

  return (
    <div className="contenedorHome">
      
      <NavBar/>
      <Filtros/>
      {/* <Glampings/> */}

      <div className='contenedorTarjetas'>
        {items?.map((item: any) => (
          <Tarjeta key={item.id} data={item} />
        ))}
      </div>

      <FiltroAvanzado/>

      <Footer/>
      
    </div>
    
  );
};

export default Home;