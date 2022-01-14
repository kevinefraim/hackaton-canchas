import { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import "./Cancha.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cancha = ({
  id,
  nombre,
  url_imagen,
  jugadores,
  techo,
  horarios,
  children,
}) => {
  const { handleReserva, reservas } = useContext(Context);
  const [time, setTime] = useState("");

  //alerta reserva success
  const notify = () =>
    toast.success("Reserva agregada!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  //alerta error reserva
  const error = () => {
    toast.error("Selecciona un horario", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  //agregando reserva
  const addReserva = () => {
    if (time === "") return error();
    const reserva = {
      id,
      nombre,
      techo,
      horario: time,
      jugadores,
    };
    handleReserva(reserva);
    notify();
    setTime("");
  };
  console.log(reservas);
  return (
    <div className="card shadow mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img className="img-cancha" src={url_imagen} alt="Card image cap" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title mb-4">{nombre}</h4>
            {jugadores && (
              <p className="card-text">
                <b>Capacidad:</b> {jugadores}
              </p>
            )}
            <p>
              <b>Techada:</b> {techo ? "Si" : "No"}
            </p>
            <div>
              {horarios.map((horario) => (
                <>
                  <button
                    onClick={() => setTime(horario)}
                    className="mx-2 my-4  btn btn-outline-success"
                    disabled={reservas.find(
                      (reserva) =>
                        reserva.id === id && reserva.horario.id === horario.id
                    )}
                  >
                    {horario.hora}
                  </button>
                </>
              ))}
              <button onClick={addReserva} className="btn btn-success d-block">
                Reservar
              </button>
              <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancha;
