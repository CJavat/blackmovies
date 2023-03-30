import React from "react";
import { Link } from "react-router-dom";
import usePeliculas from "../hooks/usePeliculas";
import Button from "./Button";

const Header = () => {
  const { cambiarDarkMode, token } = usePeliculas();

  return (
    <div className="bg-gray-200 dark:bg-gray-900 w-full flex justify-between items-center movilS:px-0 movilL:px-5 movilS:py-3">
      <Link to="/">
        <p className="font-bold w-full movilS:text-2xl tablet:text-5xl">
          BLACK <span className="text-black font-bold">MOVIES</span>
        </p>
      </Link>

      <div className="flex movilS:flex-col tablet:flex-row w-full justify-start items-center gap-1">
        <div className="flex-1 font-bold flex justify-center items-center gap-2 movilS:flex-col tablet:flex-row">
          {/* //TODO: CAMBIAR, SI YA ESTA REGISTRADO, PONER NICKNAME Y CERRAR SESION */}
          {token?.length > 0 ? (
            <Button texto="Registrarme" tipo="secundario" />
          ) : (
            <>
              <Link to="/iniciar-sesion">
                <Button texto="Iniciar Sesión" tipo="primario" />
              </Link>

              <Link to="/registrar-cuenta">
                <Button texto="Registrarme" tipo="secundario" />
              </Link>
            </>
          )}
        </div>

        <button
          onClick={cambiarDarkMode}
          className="flex movilS:flex-row movilL:flex-col justify-center items-center gap-1"
        >
          <p className="font-bold">Tema</p>
          <i className="fa-solid fa-palette hover:text-black" />
        </button>
      </div>
    </div>
  );
};

export default Header;
