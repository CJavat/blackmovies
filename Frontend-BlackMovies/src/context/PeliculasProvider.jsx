import { createContext, useEffect, useState } from "react";

const PeliculasContext = createContext();

const PeliculasProvider = ({ children }) => {
  const [guardarPeliculas, setGuardarPeliculas] = useState([]);
  const [numeroPagina, setNumeroPagina] = useState(1);
  const [paginas, setPaginas] = useState([]);
  const [token, setToken] = useState("");
  const [usuarioLogeado, setUsuarioLogeado] = useState({});

  const cambiarDarkMode = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <PeliculasContext.Provider
      value={{
        guardarPeliculas,
        numeroPagina,
        paginas,
        token,
        usuarioLogeado,

        setPaginas,
        setGuardarPeliculas,
        setNumeroPagina,
        setToken,
        setUsuarioLogeado,

        cambiarDarkMode,
      }}
    >
      {children}
    </PeliculasContext.Provider>
  );
};

export { PeliculasProvider };
export default PeliculasContext;
