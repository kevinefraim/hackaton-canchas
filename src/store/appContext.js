import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const FieldsContext = ({ children }) => {
  const [info, setInfo] = useState([]);
  const [reservas, setReservas] = useState(
    JSON.parse(localStorage.getItem("reserva")) ?? []
  );
  useEffect(() => {
    localStorage.setItem("reserva", JSON.stringify(reservas));
  }, [reservas]);

  //agregar reserva
  const handleReserva = (cancha) => {
    setReservas([cancha, ...reservas]);
  };
  //peticion a la api
  const getInfo = async (url) => {
    const response = await axios.get(url);
    setInfo(response.data);
  };

  return (
    <Context.Provider
      value={{ info, setInfo, getInfo, handleReserva, reservas, setReservas }}
    >
      {children}
    </Context.Provider>
  );
};

export default FieldsContext;
