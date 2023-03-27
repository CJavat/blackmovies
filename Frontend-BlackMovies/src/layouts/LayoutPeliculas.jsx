import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import clienteAxios from "../helpers/clienteAxios";
import usePeliculas from "../hooks/usePeliculas";

const LayoutPeliculas = () => {
  const { numeroPagina, setGuardarPeliculas } = usePeliculas();

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const respuesta = await clienteAxios.get(
          `/peliculas/mostrar-peliculas/${numeroPagina}`
        );
        setGuardarPeliculas(respuesta.data);
      } catch (error) {
        console.log(error);

        Swal.fire({
          icon: "ERROR",
          title: "Oops...",
          text: { error },
        });
      }
    };

    obtenerPeliculas();
  }, [numeroPagina]);

  return (
    <div className="flex flex-col justify-between items-center w-full h-full text-center">
      <Header />{" "}
      <div className="w-full flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutPeliculas;

//TODO: TERMINAR COMPONENTE.
