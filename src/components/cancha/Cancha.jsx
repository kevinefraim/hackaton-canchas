const Cancha = ({ id, nombre, url_imagen, jugadores, techo }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={url_imagen} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        {jugadores && <p className="card-text">Capacidad: {jugadores}</p>}
        <p>Techada: {techo ? "Si" : "No"}</p>
      </div>
    </div>
  );
};

export default Cancha;
