import fbLogo from "../../../img/fb-logo.png";
import igLogo from "../../../img/ig-logo.png";
import ytLogo from "../../../img/yt-logo.png";
import "./Redes.css";

const Redes = () => {
  return (
    <div className="container-contacto">
      <div className="container-redes">
        <h3>Seguinos en nuestras redes sociales</h3>
        <div className="redes-img">
          <img src={fbLogo} alt="fb" />
          <img src={igLogo} alt="ig" />
          <img src={ytLogo} alt="yt" />
        </div>
      </div>
    </div>
  );
};

export default Redes;
