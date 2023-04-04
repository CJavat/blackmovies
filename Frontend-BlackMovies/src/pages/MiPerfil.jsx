import { Link } from "react-router-dom";
import usePeliculas from "../hooks/usePeliculas";
//TODO: TERMINAR COMPONENTE.
const MiPerfil = () => {
  const { usuarioLogeado } = usePeliculas();

  const eliminarCuenta = (e) => {
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
      <div>{/* PELICULAS */}</div>
      {/* <p className="">{usuarioLogeado.}</p> */}
      {/* <p className="">{usuarioLogeado.peliculasfavoritas}</p> */}
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
