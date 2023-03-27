import Pelicula from "../components/Pelicula";
import usePeliculas from "../hooks/usePeliculas";

const Inicio = () => {
  const { guardarPeliculas, numeroPagina, setGuardarPeliculas } =
    usePeliculas();

  console.log(guardarPeliculas.docs);

  return (
    <div className="w-full h-screen flex flex-col gap-4">
      <div className="w-full border">BUSCAR PELICULA</div>

      {guardarPeliculas.docs?.map((pelicula) => (
        <div className="border border-white" key={pelicula._id}>
          <h2>{pelicula.nombrePelicula}</h2>
          <img
            src={`http://localhost:5000/${pelicula.fotoPortada}`}
            alt={`Foto: ${pelicula.fotoPortada}`}
            className=""
          />
        </div>
      ))}

      {/* AQUI VA LA BARRA DE PAGINAS */}
    </div>
  );
};

export default Inicio;

//TODO: TERMINAR PÁGINA.
