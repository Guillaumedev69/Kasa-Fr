import "../styles/Dropdown.scss";
import BtnDropdown from "../assets/IconBtn.png";
import PropTypes from "prop-types";
import { useState } from "react";

const Dropdown = ({ titleDropdown, contentDropdown, listDropdown }) => {
  const [isOpen, setIsOpen] = useState();

  const dropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__firstElem">
        <h2 className="dropdown__title">{titleDropdown}</h2>
        <img
          className={isOpen ? "dropdown__btn rotate" : "dropdown__btn"}
          src={BtnDropdown}
          alt="Bouton pour ouvrir l'onglet"
          onClick={dropdownClick}
        />
      </div>
      {isOpen && (
        <div
          className={
            isOpen ? "dropdown__secondElem open" : ".dropdown__secondElem"
          }
        >
          {contentDropdown && (
            <p className="dropdown__content ">{contentDropdown}</p>
          )}
          {listDropdown && <ul className="dropdown__list">{listDropdown}</ul>}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  titleDropdown: PropTypes.string.isRequired,
  contentDropdown: PropTypes.string,
  listDropdown: PropTypes.array,
};

export default Dropdown;
