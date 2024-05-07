import Logo from "../assets/Logo.webp";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <img src={Logo} alt="logo de l'entreprise Kasa" className="header__img" />
      <nav className="navbar">
        <Link
          to="/"
          className={`navbar__link ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={`navbar__link ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          À Propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
