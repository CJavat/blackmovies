import React from "react";

const Button = ({ texto, tipo }) => {
  return (
    <button
      className={`px-4 py-3 rounded-full ${
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
