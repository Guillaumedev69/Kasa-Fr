import "../styles/Dropdown.scss";
import BtnDropdown from "../assets/IconBtn.png"
import PropTypes from "prop-types";

const Dropdown = ({ titleDopdrown }) => {
  return (
    <div className="dropdown">
      <h2 className="dropdown__title">{titleDopdrown}</h2>
      <img className="dropdown__btn" src={BtnDropdown} alt="Bouton pour ouvrir l'onglet" />
    </div>
  );
};
Dropdown.propTypes = {
  titleDopdrown: PropTypes.string.isRequired,
};
export default Dropdown;
