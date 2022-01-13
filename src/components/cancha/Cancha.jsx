import "./Cancha.css";

const Cancha = ({ id, nombre, url_imagen, jugadores, techo }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className="img-fluid rounded-start"
            src={url_imagen}
            alt="Card image cap"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            {jugadores && <p className="card-text">Capacidad: {jugadores}</p>}
            <p>Techada: {techo ? "Si" : "No"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancha;
