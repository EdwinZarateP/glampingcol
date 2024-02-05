import { createContext, useState, ReactNode  } from 'react';

//Si quiere usar una variable de aqui en alguna parte de la App siga estos pasos:
//1. En el componente elegido import { useContext } from 'react';
//2. En el componente elegido traiga el proveedor asi: import ContextoGlamping
//3. Antes del return del componente cree lo siguiente: const almacenVar = useContext(ContextoGlamping)
//4. Use la variable que desee del ProveedorVariables ej: almacenVar.VariableElegida


interface ProveedorVariablesProps {
  hijo: ReactNode;
}

export const ContextoGlamping = createContext({
  esFavorito: false,
  setEsFavorito: (value: boolean) => {},
});

export const ProveedorVariables: React.FC<ProveedorVariablesProps> = ({ hijo }) => {
  
  //Aqui van todos los estados creados con useState
  const [esFavorito, setEsFavorito] = useState(false);

  
  return(
    <ContextoGlamping.Provider value={{
      //Aqui van todas las variables que seran provedidas a todas la app
      esFavorito,
      setEsFavorito
      
    }}>
      {hijo}
    </ContextoGlamping.Provider>
  )
}