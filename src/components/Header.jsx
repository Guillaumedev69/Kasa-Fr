import Logo from "../assets/Logo.webp";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo de l'entreprise Kasa" className="header__img" />
      <nav className="navbar">
        <Link
          to="/"
          className="navbar__link"
          data-active={location.pathname === "/" ? "true" : "false"}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className="navbar__link"
          data-active={location.pathname === "/about" ? "true" : "false"}
        >
          À Propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
