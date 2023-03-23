import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutPeliculas = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full text-center">
      <Header />{" "}
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutPeliculas;

//TODO: TERMINAR COMPONENTE.
