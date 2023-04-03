import usePeliculas from "../hooks/usePeliculas";
//TODO: TERMINAR COMPONENTE.
const MiPerfil = () => {
  const { usuarioLogeado } = usePeliculas();
  console.log(usuarioLogeado);
  return (
    <div>
      <h1>{usuarioLogeado.nombre}</h1>
    </div>
  );
};

export default MiPerfil;
