import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import clienteAxios from "../helpers/clienteAxios";
import usePeliculas from "../hooks/usePeliculas";
import Buscar from "../components/Buscar";
import Swal from "sweetalert2";

const LayoutPeliculas = () => {
  const {
    numeroPagina,
    paginas,
    guardarPeliculas,
    setPaginas,
    setGuardarPeliculas,
  } = usePeliculas();

  useEffect(() => {
    setPaginas([]);
    const obtenerPeliculas = async () => {
      try {
        const respuesta = await clienteAxios.get(
          `/peliculas/mostrar-peliculas/${numeroPagina}`
        );
        setGuardarPeliculas(respuesta.data);
      } catch (error) {
        console.log(error);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: { error },
        });
      }
    };

    obtenerPeliculas();
  }, [numeroPagina]);

  useEffect(() => {
    try {
      for (let i = 1; i <= guardarPeliculas?.totalPages; i++) {
        paginas.push(i);
      }
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: { error },
      });
    }
  }, [guardarPeliculas.totalPages, paginas]);

  return (
    <div className="flex flex-col justify-between items-center w-full min-h-screen text-center">
      <Header />{" "}
      <div className="w-full flex-1 self-start my-3 flex flex-col">
        {/* //TODO: TERMINAR COMPONENTE DE BUSCAR*/}
        <Buscar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutPeliculas;
