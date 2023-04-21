import React from "react";
import usePeliculas from "../hooks/usePeliculas";

const Paginacion = ({ pagina }) => {
  const { numeroPagina, setNumeroPagina } = usePeliculas();

  const cambiarPagina = () => {
    setNumeroPagina(pagina);
  };

  return (
    //TODO: FALTA QUE LA PAGINACION SOLO MUESTRE 4 BOTONES, SI HAY MÁS, MOSTRAR "..."
    //TODO: MOSTRAR EL PRIMERO, ÚLTIMO Y EL ACTUAL (TABIÉN LAS FLECHITAS PARA QUE SE PUEDA MOVER)
    <button
      onClick={() => cambiarPagina(pagina)}
      className={`rounded-full px-4 py-2 mt-3 mx-2 font-bold ${
        pagina === numeroPagina
          ? "bg-gray-400 dark:bg-gray-500"
          : "bg-gray-200 dark:bg-gray-800"
      }  `}
    >
      {pagina}
    </button>
  );
};

export default Paginacion;
