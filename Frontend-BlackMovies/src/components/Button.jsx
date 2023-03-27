import React from "react";

const Button = ({ texto, tipo }) => {
  return (
    <button
      className={`movilS:px-3 movilS:py-1 movilS:text-lg uppercase border border-black rounded-full ${
        tipo == "primario"
          ? "text-white bg-black hover:text-black hover:bg-white"
          : "text-black bg-white hover:text-white hover:bg-black"
      }   `}
    >
      {texto}
    </button>
  );
};

export default Button;
