import "./Navbar.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../store/appContext";
const Navbar = () => {
  const { reservas } = useContext(Context);
  return (
    <header>
      <div className="nav-container shadow">
        <nav className="navbar navbar-light  justify-content-between">
          <div className="left-nav">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <ul className="nav-list">
              <li>
                <Link to="/" className="links">
                  <i className="bi bi-house-fill"></i>
                </Link>
              </li>
              <li>
                <Link to="/futbol" className="links">
                  Futbol
                </Link>
              </li>
              <li>
                <Link to="/tenis" className="links">
                  Tenis
                </Link>
              </li>
              <li>
                <Link to="/voley" className="links">
                  Voley
                </Link>
              </li>
            </ul>
          </div>
          <div className="right-nav">
            <i className="bi bi-cart cart-icon">{reservas.length}</i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
