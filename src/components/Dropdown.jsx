import "../styles/Dropdown.scss";
import BtnDropdown from "../assets/IconBtn.png";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Dropdown = ({ titleDropdown, contentDropdown, listDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {}, [isOpen]);

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
          {contentDropdown && (
            <p className="dropdown__content">{contentDropdown}</p>
          )}
          {listDropdown && <ul className="dropdown__list">{listDropdown}</ul>}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  titleDropdown: PropTypes.string.isRequired,
  contentDropdown: PropTypes.string.isRequired,
  listDropdown: PropTypes.string.isRequired,
};

export default Dropdown;
