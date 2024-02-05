import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Si quiere usar una variable de aquí en alguna parte de la App, siga estos pasos:
// 1. En el componente elegido, importe { useContext } from 'react';
// 2. En el componente elegido, traiga el proveedor así: import { ContextoGlamping }
// 3. Antes del return del componente, cree lo siguiente: const almacenVar = useContext(ContextoGlamping)
// 4. Use la variable que desee del ProveedorVariables, por ejemplo: almacenVar.esFavorito

// Define la interfaz para el contexto
interface ContextProps {
  esFavorito: boolean;
  setEsFavorito: Dispatch<SetStateAction<boolean>>;
}

// Crea el contexto con un valor inicial undefined
export const ContextoGlamping = createContext<ContextProps | undefined>(undefined);

// Props para el proveedor de variables
interface ProveedorVariablesProps {
  hijo: ReactNode;
}

// Proveedor de variables que utiliza el contexto
export const ProveedorVariables: React.FC<ProveedorVariablesProps> = ({ hijo }) => {
  // Estado para la variable esFavorito
  const [esFavorito, setEsFavorito] = useState(false);

  // Crea el objeto de contexto con los valores y funciones necesarios
  const contextValue: ContextProps = {
    esFavorito,
    setEsFavorito,
  };

  // Renderiza el proveedor de contexto con el valor proporcionado
  return (
    <ContextoGlamping.Provider value={contextValue}>
      {hijo}
    </ContextoGlamping.Provider>
  );
};
