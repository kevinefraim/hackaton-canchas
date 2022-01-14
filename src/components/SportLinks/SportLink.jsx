import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import "./SportLink.css";

const SportLink = () => {
  const { info, getInfo } = useContext(Context);

  useEffect(() => {
    getInfo("https://apipdtc.herokuapp.com/deportes");
  }, [info]);

  return (
    <div className="container-fluid">
      <h1 className="text-center my-3" id="canchas">
        Nuestras canchas
      </h1>
      <div className="card-container">
        {info.map((sport) => (
          <div
            key={sport.id}
            className="card shadow"
            style={{ width: "18rem" }}
          >
            <img
              className="card-img-top card-imagen"
              src={sport.url_imagen}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title text-center">{sport.deporte}</h5>
              <p className="card-text">
                Vení a conocer las mejores canchas de {sport.deporte} del país!
              </p>
              <Link to={`${sport.deporte}`}>
                <button className=" btn btn-primary">Ver canchas</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportLink;
