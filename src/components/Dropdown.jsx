import "../styles/Dropdown.scss";
import BtnDropdown from "../assets/IconBtn.png";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Dropdown = ({ titleDropdown, contentDropdown }) => {
  const handleImgClick = () => {};

  useEffect(() => {}, []);

  return (
    <div className="dropdown">
      <div className="dropdown__firstElem">
        <h2 className="dropdown__title">{titleDropdown}</h2>
        <img
          className="dropdown__btn"
          src={BtnDropdown}
          alt="Bouton pour ouvrir l'onglet"
          onClick={handleImgClick}
        />
      </div>
      <div className="dropdown__secondElem">
        <p>{contentDropdown}</p>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  titleDropdown: PropTypes.string.isRequired,
  contentDropdown: PropTypes.string.isRequired,
};

export default Dropdown;
