import React from "react";
import { Link } from "react-router-dom";
import usePeliculas from "../hooks/usePeliculas";
import Button from "./Button";

const Header = () => {
  const { cambiarDarkMode } = usePeliculas();
  return (
    <div className="bg-gray-200 dark:bg-gray-900 h-28 w-full flex justify-between items-center movilS:px-0 movilL:px-5">
      <p className="font-bold text-5xl w-full">
        BLACK <span className="text-black font-bold">MOVIES</span>
      </p>

      <div className="flex movilS:flex-col tablet:flex-row w-full justify-start items-center">
        <div className="flex-1 font-bold">
          {/* //TODO: CAMBIAR, SI YA ESTA REGISTRADO, PONER NICKNAME Y CERRAR SESION */}
          <Link to="/registrar-cuenta">
            <Button texto="Registrarme" tipo="secundario" />
          </Link>
        </div>
        <button
          onClick={cambiarDarkMode}
          className="flex flex-col justify-center items-center gap-3"
        >
          <p className="font-bold">Tema</p>
          <i className="fa-solid fa-palette hover:text-black" />
        </button>
      </div>
    </div>
  );
};

export default Header;
