import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import clienteAxios from "../helpers/clienteAxios";
import usePeliculas from "../hooks/usePeliculas";

const Pelicula = () => {
  //* INFORMACIÓN DE LA PELÍCULA.
  const { id } = useParams();
  const [datosPelicula, setDatosPelicula] = useState({});
  const { formatearFecha } = usePeliculas();

  useEffect(() => {
    const obtenerDatosPelicula = async () => {
      try {
        const respuesta = await clienteAxios.get(
          `/peliculas/mostrar-pelicula/${id}`
        );
        setDatosPelicula(respuesta.data);
      } catch (error) {
        console.log(error);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: error.response?.data?.msg || error,
        // });
      }
    };

    obtenerDatosPelicula();
  }, []);

  // console.log(datosPelicula);

  //TODO: TERMINAR ESTE COMPONENTE
  return (
    <div
      className="flex-1"
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("http://localhost:5000/${datosPelicula.fotoFondo}")`,
        backgroundPosition: "50% 0",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-between items-center">
        {" "}
        {/* movilS:h-36 movilL:h-40 tablet:h-56 laptop:h-96 */}
        <div className="flex movilS:flex-col tablet:flex-row justify-between items-center gap-4">
          <img
            src={`http://localhost:5000/${datosPelicula.fotoPortada}`}
            alt={datosPelicula.fotoPortada}
            className="w-fit movilS:h-36 movilL:h-40 tablet:h-56 laptop:h-96"
          />

          <div className="flex flex-col justify-center items-center">
            <h3>{datosPelicula.nombrePelicula}</h3>
            <p className="font-bold my-2">
              <span className="block">
                <i
                  className={`fa-star ${
                    datosPelicula.valoracion >= 1 ? "fa-solid" : "fa-regular"
                  }`}
                />
                <i
                  className={`fa-star ${
                    datosPelicula.valoracion >= 2 ? "fa-solid" : "fa-regular"
                  }`}
                />
                <i
                  className={`fa-star ${
                    datosPelicula.valoracion >= 3 ? "fa-solid" : "fa-regular"
                  }`}
                />
                <i
                  className={`fa-star ${
                    datosPelicula.valoracion >= 4 ? "fa-solid" : "fa-regular"
                  }`}
                />
                <i
                  className={`fa-star ${
                    datosPelicula.valoracion >= 5 ? "fa-solid" : "fa-regular"
                  }`}
                />
              </span>
            </p>
            <p>
              {datosPelicula?.fechaPelicula
                ? formatearFecha(datosPelicula.fechaPelicula)
                : "Cargando..."}
            </p>
            <p className="px-3 py-2 w-fit bg-gray-200 dark:bg-gray-900 rounded-full border-none font-bold">
              {datosPelicula.generos?.map((genero, index) =>
                genero.concat(
                  index < datosPelicula.generos.length - 1 ? ", " : ""
                )
              )}
            </p>
            <p>{datosPelicula.sinopsis}</p>
          </div>
        </div>
        {/* 
          //TODO: INTENTAR HACER QUE SEA TIPO MODAL, QUE LE PRESIONE A VER COMENTARIOS Y TE APAREZCA UN DIV CON COMENTARIOS.
        */}
        <div className="w-full">
          {datosPelicula.comentarios?.map((pelicula) => (
            <div key={pelicula._id} className="border-2 border-red-600">
              <p>{pelicula.usuario.nickname}</p>
              <p>{pelicula.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pelicula;

/*
FALTA DARLE ESTILO
QUE SE VEA BIEN EN MÓVIL
*/

//TODO: HACER ESTE COMPONENTE.
