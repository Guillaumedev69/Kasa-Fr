import "../styles/Dropdown.scss";
import BtnDropdown from "../assets/IconBtn.png";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Dropdown = ({ titleDropdown, contentDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Vous pouvez ajouter ici des effets de côté liés à l'ouverture/fermeture du dropdown, si nécessaire
  }, [isOpen]);

  return (
    <div className="dropdown">
      <div className="dropdown__firstElem">
        <h2 className="dropdown__title">{titleDropdown}</h2>
        <img
          className="dropdown__btn"
          src={BtnDropdown}
          alt="Bouton pour ouvrir l'onglet"
          onClick={dropdownClick}
        />
      </div>
      {isOpen && (
        <div className="dropdown__secondElem">
          <p>{contentDropdown}</p>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  titleDropdown: PropTypes.string.isRequired,
  contentDropdown: PropTypes.string.isRequired,
};

export default Dropdown;
