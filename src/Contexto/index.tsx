import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Si quiere usar una variable de aquí en alguna parte de la App, siga estos pasos:
// 1. En el componente elegido, import { useContext } from 'react';
// 2. En el componente elegido, traiga el proveedor así: import { ContextoGlamping } from '../../Contexto/index'
// 3. Antes del return del componente, cree lo siguiente: const almacenVar = useContext(ContextoGlamping)
// 4. Use la variable que desee del ProveedorVariables, por ejemplo: almacenVar.esFavorito

//-------------------------------------------------------------------------------------
// 1. Define la interfaz para el contexto
//-------------------------------------------------------------------------------------

interface ContextProps {

  //Seleccionar si es favorito el glamping
  esFavorito: boolean;
  setEsFavorito: Dispatch<SetStateAction<boolean>>;

  //Abrir Filtro avanzado
  estaAbiertoFiltroAvanzado: boolean;
  setEstaAbiertoFiltroAvanzado: Dispatch<SetStateAction<boolean>>;
  abrirFiltroAvanzado: () => void; 
  cerrarFiltroAvanzado: () => void; 

  //Cual Glamping selecciono el usuario
  glampingSeleccionado: Record<string, any>; // Tipo genérico para un objeto con cualquier propiedad
  setGlampingSeleccionado: Dispatch<SetStateAction<Record<string, any>>>;

  //Abrir Filtro avanzado
  estaAbiertoAlgo: boolean;
  setEstaAbiertoAlgo: Dispatch<SetStateAction<boolean>>;
  abrirAlgo: () => void; 
  cerrarAlgo: () => void; 

}

// Crea el contexto con un valor inicial undefined
export const ContextoGlamping = createContext<ContextProps | undefined>(undefined);

// Props para el proveedor de variables
interface ProveedorVariablesProps {
  hijo: ReactNode;
}

//-------------------------------------------------------------------------------------
// 2. Proveedor de variables que utiliza el contexto 
//-------------------------------------------------------------------------------------

export const ProveedorVariables: React.FC<ProveedorVariablesProps> = ({ hijo }) => {
  // Estado para la variable esFavorito
  const [esFavorito, setEsFavorito] = useState(false);

  // Estado para abrir y cerrar el multifiltro
  const [estaAbiertoFiltroAvanzado, setEstaAbiertoFiltroAvanzado] = useState(false);
  const abrirFiltroAvanzado=()=>setEstaAbiertoFiltroAvanzado(true);
  const cerrarFiltroAvanzado=()=>setEstaAbiertoFiltroAvanzado(false);

  // Estado para mostrar en /InfoGlamping todo del Glamping seleccionado
  const [glampingSeleccionado, setGlampingSeleccionado]= useState({});

   // Estado para abrir y cerrar el Algo
   const [estaAbiertoAlgo, setEstaAbiertoAlgo] = useState(false);
   const abrirAlgo=()=>setEstaAbiertoFiltroAvanzado(true);
   const cerrarAlgo=()=>setEstaAbiertoFiltroAvanzado(false);

  //-------------------------------------------------------------------------------------
  // 3. Crea el objeto de contexto con los valores y funciones necesarios que quieres proveer
  //-------------------------------------------------------------------------------------

  const contextValue: ContextProps = {
    esFavorito,
    setEsFavorito,
    estaAbiertoFiltroAvanzado,
    setEstaAbiertoFiltroAvanzado,
    abrirFiltroAvanzado,
    cerrarFiltroAvanzado,
    glampingSeleccionado,
    setGlampingSeleccionado,
    estaAbiertoAlgo,
    setEstaAbiertoAlgo,
    abrirAlgo,
    cerrarAlgo 
  };

  // Renderiza el proveedor de contexto con el valor proporcionado
  return (
    <ContextoGlamping.Provider value={contextValue}>
      {hijo}
    </ContextoGlamping.Provider>
  );
};
