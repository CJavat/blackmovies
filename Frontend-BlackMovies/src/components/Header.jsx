import React from "react";
import usePeliculas from "../hooks/usePeliculas";

const Header = () => {
  const { cambiarDarkMode } = usePeliculas();
  return (
    <div className="bg-gray-200 dark:bg-gray-900 h-11">
      <p className="">Hola Mundo</p>
      <button onClick={cambiarDarkMode}>Cambiar Tema</button>
    </div>
  );
};

export default Header;
//TODO: TERMINAR COMPONENTE.
