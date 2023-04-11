import { Link } from "react-router-dom";
import usePeliculas from "../hooks/usePeliculas";
import { useEffect, useState } from "react";
import clienteAxios from "../helpers/clienteAxios";
//TODO: TERMINAR COMPONENTE.
const MiPerfil = () => {
  const {
    usuarioLogeado,
    guardarPeliculas,
    refrescar,
    setRefrescar,
    agregarEliminarFavorito,
  } = usePeliculas();

  const [peliculasFavoritas, setPeliculasFavoritas] = useState({});

  useEffect(() => {
    const obtenerPeliculas = async () => {
      //TODO: TERMINAR DE OBTENER Y PASARLOS AL STATE DE PELICULAS FAVORITAS Y DESPUES MODIFICAR EL STATE REFRESCAR.
      try {
        const respuesta = await clienteAxios.get(
          `/usuarios/obtener-peliculas-favoritas/${usuarioLogeado.id}`
        );
        console.log(respuesta.data);
      } catch (error) {
        console.log(error);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: error.response?.data?.msg || error,
        // });
      }
    };

    obtenerPeliculas();
  }, [usuarioLogeado, refrescar]);

  const eliminarCuenta = (e) => {
    // TODO: TERMINAR ELIMINAR CUENTA
    e.preventDefault();
  };

  console.log(usuarioLogeado);

  return (
    <div className="flex-1 self-center flex flex-col justify-center items-start px-2 border rounded-lg gap-1 movilS:w-11/12 tablet:w-96">
      <div className="text-left w-full">
        <p className="text-2xl uppercase">Nombre: {usuarioLogeado.nombre}</p>
        <p className="text-2xl">NICKNAME: {usuarioLogeado.nickname}</p>
        <p className="text-2xl">EMAIL: {usuarioLogeado.email}</p>

        <div className="w-full mt-5 flex movilS:flex-col gap-2">
          <Link to="/editar-perfil">
            <button className="w-full uppercase text-lg px-2 py-3 font-bold rounded-full bg-blue-600">
              Editar perfil
            </button>
          </Link>

          <button
            className="w-full uppercase text-lg px-2 py-3 font-bold rounded-full bg-red-500"
            onClick={eliminarCuenta}
          >
            Eliminar cuenta
          </button>
        </div>
      </div>

      {/* //TODO: TERMINAR EL MOSTRAR LAS PELICULAS FAVORITAS DEL USUARIO. */}
      <div className="w-full flex-1 flex movilS:flex-col tablet:flex-row justify-center items-center gap-4 px-2">
        {/* //TODO: HACER QUE FUNCIONÉ */}
        {/* {guardarPeliculas.docs?.map((pelicula) => (
          <div
            key={pelicula._id}
            className="movilS:w-9/12 movilL:w-8/12 tablet:w-3/12 laptop:w-5/12 desktop:w-2/12 flex flex-col justify-between"
          >
            <div className="flex flex-row-reverse justify-between items-center">
              {usuarioLogeado.peliculasFavoritas?.includes(pelicula._id) ? (
                <button
                  className="text-2xl"
                  onClick={() =>
                    agregarEliminarFavorito(true, {
                      idPelicula: pelicula._id,
                      idUsuario: usuarioLogeado.id,
                    })
                  }
                >
                  <i className="fa-solid fa-heart text-red-600" />
                </button>
              ) : (
                <button
                  className="text-2xl"
                  onClick={() =>
                    agregarEliminarFavorito(false, {
                      idPelicula: pelicula._id,
                      idUsuario: usuarioLogeado.id,
                    })
                  }
                >
                  <i className="fa-regular fa-heart text-red-600" />
                </button>
              )}

              <p className="font-bold my-2">
                Puntuación:{" "}
                <span className="block">
                  <i
                    className={`fa-star ${
                      pelicula.valoracion >= 1 ? "fa-solid" : "fa-regular"
                    }`}
                  />
                  <i
                    className={`fa-star ${
                      pelicula.valoracion >= 2 ? "fa-solid" : "fa-regular"
                    }`}
                  />
                  <i
                    className={`fa-star ${
                      pelicula.valoracion >= 3 ? "fa-solid" : "fa-regular"
                    }`}
                  />
                  <i
                    className={`fa-star ${
                      pelicula.valoracion >= 4 ? "fa-solid" : "fa-regular"
                    }`}
                  />
                  <i
                    className={`fa-star ${
                      pelicula.valoracion >= 5 ? "fa-solid" : "fa-regular"
                    }`}
                  />
                </span>
              </p>
            </div>
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
        ))} */}
      </div>
    </div>
  );
};

export default MiPerfil;

/*
  Nombre
  NickName
  Email
  Password
  PeliculasFavoritas
*/
