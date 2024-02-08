import NavBar from '../../Componentes/NavBar/index'
import Filtros from '../../Componentes/Filtros/index'
import Footer from '../../Componentes/Footer/index'
import Tarjeta from '../../Componentes/Tarjeta/index'
import FiltroAvanzado from '../../Componentes/FiltroAvanzado/index'
import { useState , useEffect} from 'react'
import './estilos.css'


// import g1 from '../../Imagenes/g1.jpg';
import g2 from '../../imagenes/g2.jpg';
import g3 from '../../imagenes/g3.jpg';
import g4 from '../../imagenes/g4.jpg';
import g5 from '../../imagenes/g5.jpg';
import g6 from '../../imagenes/g6.jpg';
import g7 from '../../imagenes/g7.jpg';
import g8 from '../../imagenes/g8.jpg';
import g9 from '../../imagenes/g9.jpg';

  const Glampings = [
    { id: 1, title: "Terrojo", image: g4, price:310000, date:'1 enero', distancia:400},
    { id: 2, title: "Bajo el Xielo", image: g2, price:100000, date:'11 enero', distancia:400},
    // { id: 3, title: "Constelacion Glamping", image: g1, price:350000, date:'19 enero', distancia:400 },
    { id: 4, title: "Aika - Tabio", image: g5, price:400000, date:'18 enero', distancia:400 },
    { id: 5, title: "Punta de los remedios", image: g6, price:300000, date:'12 enero', distancia:400 },
    { id: 6, title: "Rionegro", image: g7, price:180000, date:'14 enero', distancia:400 },
    { id: 7, title: "El retiro", image: g8, price:180000, date:'21 enero', distancia:400 },
    { id: 8, title: "Suesca", image: g9, price:120000, date:'13 enero', distancia:400 },
    { id: 9, title: "Bajo el Xielo", image: g2, price:200000, date:'11 enero', distancia:400 },
    { id: 10, title: "Paihuen", image: g3, price:305000, date:'21 enero', distancia:400 },
    { id: 11, title: "Paihuen", image: g3, price:180000, date:'14 enero', distancia:400 },
    { id: 12, title: "Terrojo", image: g4, price:180000, date:'21 enero', distancia:400 },

  ];


function Home () {

  const [items, setItems] = useState<any>(null);

  useEffect(()=>{
    // fetch('https://fakestoreapi.com/products')
    // .then(response=> response.json())
    // .then(datos => setItems (datos))
    setItems(Glampings);

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