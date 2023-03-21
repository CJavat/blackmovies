import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "http://localhost:5000/api", //TODO: AGREGARLO A UNA VARIABLE DE ENTORNO.
});

export default clienteAxios;
