import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../../store/appContext";
import Cancha from "../../cancha/Cancha";

const Canchas = () => {
  const { id } = useParams();
  const { getInfo, info } = useContext(Context);

  useEffect(() => {
    getInfo(id);
  }, [info]);

  return (
    <>
      <h1>Canchas de {id}</h1>
      {info.length > 0 ? (
        info.map((cancha) => <Cancha key={cancha.id} {...cancha}></Cancha>)
      ) : (
        <h1>no hay</h1>
      )}
    </>
  );
};

export default Canchas;
