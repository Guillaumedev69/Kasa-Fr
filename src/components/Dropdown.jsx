import "../styles/Dropdown.scss";
import BtnDropdown from "../assets/IconBtn.png";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Dropdown = ({ titleDropdrown }) => {
  const handleImgClick = () => {
    alert(`J'aurai € à payer 💸`);
  };

  useEffect(() => {}, []);

  return (
    <div className="dropdown">
      <h2 className="dropdown__title">{titleDropdrown}</h2>
      <img
        className="dropdown__btn"
        src={BtnDropdown}
        alt="Bouton pour ouvrir l'onglet"
        onClick={handleImgClick}
        />
    </div>
  );
};

Dropdown.propTypes = {
  titleDropdrown: PropTypes.string.isRequired,
};

export default Dropdown;
