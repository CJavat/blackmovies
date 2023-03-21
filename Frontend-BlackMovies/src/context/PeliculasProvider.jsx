import { createContext, useEffect, useState } from "react";

const PeliculasContext = createContext();

const PeliculasProvider = ({ children }) => {
  const cambiarDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <PeliculasContext.Provider value={{ cambiarDarkMode }}>
      {children}
    </PeliculasContext.Provider>
  );
};

export { PeliculasProvider };
export default PeliculasContext;
