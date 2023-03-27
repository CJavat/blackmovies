import { Link } from "react-router-dom";
import Button from "../components/Button";
import Pelicula from "./Pelicula";
import usePeliculas from "../hooks/usePeliculas";
import { useEffect, useState } from "react";
import Paginacion from "../components/Paginacion";

const Inicio = () => {
  const {
    guardarPeliculas,
    numeroPagina,
    paginas,
    setGuardarPeliculas,
    setNumeroPagina,
    setPaginas,
  } = usePeliculas();

  const cambiarPagina = (pagina) => {
    setNumeroPagina(pagina);
  };

  console.log(guardarPeliculas);

  return (
    <>
      <div className="w-full flex movilS:flex-col tablet:flex-row justify-center items-center gap-4 px-2">
        {/* //TODO: PONER LA VALORACION ARRIBA O AL LADO DE LA IMAGEN, CON UNA ESTRELLA AL LADO */}
        {guardarPeliculas.docs?.map((pelicula) => (
          <div
            key={pelicula._id}
            className="movilS:w-9/12 movilL:w-8/12 tablet:w-6/12 laptop:w-5/12 desktop:w-2/12 flex flex-col justify-between h-full"
          >
            <Link to={`/pelicula/${pelicula._id}`}>
              <img
                src={`http://localhost:5000/${pelicula.fotoPortada}`}
                alt={`Foto: ${pelicula.fotoPortada}`}
                className="w-full"
              />
              <h2 className="h-16 overflow-hidden">
                {pelicula.nombrePelicula}
              </h2>
              <p className="px-3 py-2 bg-gray-200 dark:bg-gray-900 rounded-full border-none font-bold">
                {pelicula.generos.map((genero, index) =>
                  genero.concat(index < pelicula.generos.length - 1 ? ", " : "")
                )}
              </p>
            </Link>
          </div>
        ))}

        {/* AQUI VA LA BARRA DE PAGINAS */}
      </div>
      <div className="">
        {guardarPeliculas?.prevPage ? (
          <button onClick={() => cambiarPagina(guardarPeliculas.prevPage)}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        ) : null}

        {paginas.map((pagina) => (
          <Paginacion key={pagina} pagina={pagina} />
        ))}
        {guardarPeliculas?.nextPage ? (
          <button onClick={() => cambiarPagina(guardarPeliculas.nextPage)}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        ) : null}
      </div>
    </>
  );
};

export default Inicio;

//TODO: TERMINAR PÁGINA.
