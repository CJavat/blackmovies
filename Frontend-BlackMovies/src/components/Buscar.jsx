import { useState } from "react";
import Swal from "sweetalert2";
import clienteAxios from "../helpers/clienteAxios";
import usePeliculas from "../hooks/usePeliculas";
import { Link } from "react-router-dom";

const Buscar = () => {
  const { showModalPeliculas, setShowModalPeliculas } = usePeliculas();

  const [datos, setDatos] = useState("");
  const [peliculasEncontradas, setPeliculasEncontradas] = useState([]);

  const buscar = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await clienteAxios.post("/peliculas/buscar-peliculas", {
        nombre: datos,
      });
      setPeliculasEncontradas(respuesta.data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data?.msg || error,
      });
      setPeliculasEncontradas([]);
    }
  };

  const almacenandoDatos = (e) => {
    setDatos(e.target.value);
  };

  const irAPeliculas = (e) => {
    setPeliculasEncontradas([]);
    setShowModalPeliculas(false);
  };

  return (
    <>
      <div
        className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white rounded-full m-auto h-10 movilS:w-full tablet:w-6/12 flex justify-center items-center gap-2"
        onClick={() => setShowModalPeliculas(true)}
      >
        <p className="font-bold text-lg uppercase">buscar pelicula</p>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      {showModalPeliculas ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white dark:bg-black outline-none focus:outline-none h-fit movilS:w-72 movilL:w-96 tablet:w-11/12">
                {/*header*/}
                <div className="self-center flex items-start justify-between py-5 border-b border-solid border-slate-200 rounded-t">
                  {/* //TODO: TERMINAR EL DISEÑO */}
                  <form
                    onSubmit={buscar}
                    className="text-black dark:text-white flex justify-center items-center gap-2 w-full"
                  >
                    <input
                      type="text"
                      name="nombre"
                      onChange={almacenandoDatos}
                      placeholder="BUSCAR PRODUCTO"
                      className="px-2 py-1 border border-black dark:border-white rounded-full bg-white dark:bg-black"
                    />

                    <input
                      type="submit"
                      value="Buscar"
                      className="font-bold uppercase border border-black dark:border-white rounded-full px-2 py-1"
                    />
                  </form>
                </div>

                {/*body*/}
                <div className="relative p-2 flex-auto w-full overflow-x-scroll flex flex-col justify-center items-center">
                  <div className="self-start flex justify-start items-center gap-4">
                    {Object.keys(peliculasEncontradas).length > 0
                      ? peliculasEncontradas.map((pelicula) => (
                          <div
                            key={pelicula._id}
                            className="relative movilS:w-9/12 movilL:w-8/12 tablet:w-3/12 laptop:w-5/12 desktop:w-2/12 flex flex-col justify-between"
                          >
                            <p className="font-bold bg-black rounded-full px-2 py-1 text-red-500 absolute top-0 right-0">
                              {pelicula.valoracion}
                              <i className="fa-star fa-solid " />
                            </p>

                            <Link
                              to={`/pelicula/${pelicula._id}`}
                              className="movilS:w-28 tablet:w-40"
                              onClick={irAPeliculas}
                              //TODO: ARREGLAR POR QUE NO ME MANDA A OTRAS PELICULAS DESPUES DE IR A UNA.
                            >
                              <img
                                src={`http://localhost:5000/${pelicula.fotoPortada}`}
                                alt={`Foto: ${pelicula.fotoPortada}`}
                                className="w-full"
                              />

                              <h2 className="h-16 overflow-hidden">
                                {pelicula.nombrePelicula}
                              </h2>
                            </Link>
                          </div>
                        ))
                      : null}
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModalPeliculas(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Buscar;

//TODO: TERMINAR COMPONENTE DE BUSCAR*/
