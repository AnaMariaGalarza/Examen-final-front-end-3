import { GlobalContext } from "../States/GlobalProvider";
import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, dispatch] = useContext(GlobalContext);

  const handleThemeToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const navClass =
    state.theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light";

  return (
    <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm ${navClass}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <Link to="/home" className={`navbar-brand ${styles.navbarBrand}`}>
            DH Odonto
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link to="/contacto" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link to="/favs" className="nav-link">
                  Favs
                </Link>
              </li>
              <li className={`nav-item`}>
                <button
                  className={`btn ${
                    state.theme === "light" ? "btn-light" : "btn-dark"
                  }${styles.btnStyle}`}
                  onClick={handleThemeToggle}
                >
                  {state.theme === "light" ? "☀" : "🌙"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
