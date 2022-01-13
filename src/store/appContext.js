import axios from "axios";
import { createContext, useState } from "react";

export const Context = createContext(null);

const FieldsContext = ({ children }) => {
  const [info, setInfo] = useState([]);
  const getInfo = async (type) => {
    const response = await axios.get(`https://apipdtc.herokuapp.com/${type}`);

    setInfo(response.data);
  };
  return (
    <Context.Provider value={{ info, setInfo, getInfo }}>
      {children}
    </Context.Provider>
  );
};

export default FieldsContext;
