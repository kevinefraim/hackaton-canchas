import "./Navbar.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="nav-container">
        <nav className="navbar navbar-light  justify-content-between">
          <div className="left-nav">
            <Link to="/" className="links">
              <img src={logo} alt="logo" />
            </Link>
            <ul className="nav-list">
              <li>
                <Link to="/" className="links">
                  Inicio
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
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>

            <i className="bi bi-heart-fill font-heart"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
