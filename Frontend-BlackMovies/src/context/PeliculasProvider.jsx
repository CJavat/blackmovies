import { createContext, useEffect, useState } from "react";

const PeliculasContext = createContext();

const PeliculasProvider = ({ children }) => {
  const [guardarPeliculas, setGuardarPeliculas] = useState([]);
  const [numeroPagina, setNumeroPagina] = useState(1);

  const cambiarDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <PeliculasContext.Provider
      value={{
        guardarPeliculas,
        numeroPagina,

        setGuardarPeliculas,
        setNumeroPagina,

        cambiarDarkMode,
      }}
    >
      {children}
    </PeliculasContext.Provider>
  );
};

export { PeliculasProvider };
export default PeliculasContext;
