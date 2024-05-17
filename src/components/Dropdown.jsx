import "../styles/Dropdown.scss";
import BtnDropdown from "../assets/IconBtn.png";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

const Dropdown = ({ titleDropdown, contentDropdown, listDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dropdownClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      dropdownRef.current.style.maxHeight = `${dropdownRef.current.scrollHeight}px`;
      dropdownRef.current.style.opacity = "1";
    } else {
      dropdownRef.current.style.maxHeight = "0px";
      dropdownRef.current.style.opacity = "0";
    }
  }, [isOpen]);

  return (
    <div className="dropdown">
      <div className="dropdown__firstElem" onClick={dropdownClick}>
        <h2 className="dropdown__title">{titleDropdown}</h2>
        <img
          className={isOpen ? "dropdown__btn rotate" : "dropdown__btn"}
          src={BtnDropdown}
          alt="Bouton pour ouvrir l'onglet"
        />
      </div>
      <div ref={dropdownRef} className="dropdown__secondElem">
        {contentDropdown && (
          <p className="dropdown__content">{contentDropdown}</p>
        )}
        {listDropdown && <ul className="dropdown__list">{listDropdown}</ul>}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  titleDropdown: PropTypes.string.isRequired,
  contentDropdown: PropTypes.string,
  listDropdown: PropTypes.array,
};

export default Dropdown;
