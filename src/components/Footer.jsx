import LogoWhite from "../assets/Logo.webp";
import "../styles/Footer.scss";
const Footer = () => {
  return (
    <footer>
      <img
        src={LogoWhite}
        alt="Logo de l'entreprise kasa en noir et blanc"
        className="footer__img"
      />
      <p className="footer__text"> &copy; 2024 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
