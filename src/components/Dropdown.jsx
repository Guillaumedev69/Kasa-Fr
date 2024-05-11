import "../styles/Dropdown.scss";
import BtnDropdown from "../assets/IconBtn.png";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Dropdown = ({ titleDropdown }) => {
  const handleImgClick = () => {
    alert(`J'aurai € à payer 💸`);
  };

  useEffect(() => {}, []);

  return (
    <div className="dropdown">
      <h2 className="dropdown__title">{titleDropdown}</h2>
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
  titleDropdown: PropTypes.string.isRequired,
};

export default Dropdown;
