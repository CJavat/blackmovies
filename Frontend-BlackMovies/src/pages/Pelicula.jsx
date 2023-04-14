import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import clienteAxios from "../helpers/clienteAxios";

const Pelicula = () => {
  //* INFORMACIÓN DE LA PELÍCULA.
  const { id } = useParams();
  const [datosPelicula, setDatosPelicula] = useState({});

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

  console.log(datosPelicula);

  //TODO: TERMINAR ESTE COMPONENTE
  return (
    <div className="">
      <div className="flex justify-center items-center relative overflow-hidden movilS:h-36 movilL:h-40 tablet:h-56 laptop:h-96 border border-red-600">
        <img
          src={`http://localhost:5000/${datosPelicula.fotoFondo}`}
          alt={datosPelicula.fotoFondo}
          className="absolute opacity-30 -z-10"
        />

        <img
          src={`http://localhost:5000/${datosPelicula.fotoPortada}`}
          alt={datosPelicula.fotoPortada}
          className="w-fit movilS:h-full movilL:h-full"
        />
        {/* //? AGREGAR LOS DEMÁS DATOS. */}
      </div>
    </div>
  );
};

export default Pelicula;

//TODO: HACER ESTE COMPONENTE.
