//! IMPORTAR DEPENDENCIAS --
import { BrowserRouter, Route, Routes } from "react-router-dom";

//! IMPORTAR LAYOUT --
import LayoutPeliculas from "./layouts/LayoutPeliculas";

//! IMPORTAR CONTEXT --
import { PeliculasProvider } from "./context/PeliculasProvider";

//! IMPORTAR PÁGINAS --
import Inicio from "./pages/Inicio";
import Pelicula from "./pages/Pelicula";
import RegistrarCuenta from "./pages/RegistrarCuenta";

//! IMPORTAR COMPONENTES --

function App() {
  return (
    <BrowserRouter>
      <PeliculasProvider>
        <Routes>
          <Route element={<LayoutPeliculas />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/registrar-cuenta" element={<RegistrarCuenta />} />
            <Route path="/pelicula/:id" element={<Pelicula />} />
          </Route>
        </Routes>
      </PeliculasProvider>
      {/* //TODO: CREAR COMPONENTE DE NOT FOUND */}
    </BrowserRouter>
  );
}

export default App;
