import { Outlet } from "react-router-dom";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

const LayoutPeliculas = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />{" "}
      <div className="flex-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutPeliculas;

//TODO: TERMINAR COMPONENTE.
