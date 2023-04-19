import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import clienteAxios from "../helpers/clienteAxios";

const VerPelicula = () => {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState("");

  useEffect(() => {
    const obtenerDatosPelicula = async () => {
      try {
        const respuesta = await clienteAxios.get(
          `/peliculas/mostrar-pelicula/${id}`
        );
        setPelicula(respuesta.data);
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data?.msg || error,
        });
      }
    };

    obtenerDatosPelicula();
  }, []);

  console.log(pelicula.pelicula);

  return <div>VerPelicula</div>;
};

export default VerPelicula;

// http://localhost:5000/${pelicula.pelicula}

//TODO: TERMINAR COMPONENTE.
