//! IMPORTAR DEPENDENCIAS --
import { BrowserRouter, Route, Routes } from "react-router-dom";

//! IMPORTAR LAYOUT --
import LayoutPeliculas from "./layouts/LayoutPeliculas";

//! IMPORTAR CONTEXT --
import { PeliculasProvider } from "./context/PeliculasProvider";

//! IMPORTAR PÁGINAS --
import Inicio from "./pages/Inicio";
import IniciarSesion from "./pages/IniciarSesion";
import RegistrarCuenta from "./pages/RegistrarCuenta";
import Pelicula from "./pages/Pelicula";
import NotFound from "./pages/NotFound";

//! IMPORTAR COMPONENTES --

function App() {
  return (
    <BrowserRouter>
      <PeliculasProvider>
        <Routes>
          <Route element={<LayoutPeliculas />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/iniciar-sesion" element={<IniciarSesion />} />
            <Route path="/registrar-cuenta" element={<RegistrarCuenta />} />
            <Route path="/pelicula/:id" element={<Pelicula />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </PeliculasProvider>
    </BrowserRouter>
  );
}

export default App;
