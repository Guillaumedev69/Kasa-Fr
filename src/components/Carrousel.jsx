import "../styles/Carrousel.scss";
import PropTypes from "prop-types";
import BtnLeft from "../assets/BtnCarrouselLeft.png";
import BtnRight from "../assets/BtnCarrouselRight.png";

const Carrousel = ({imageUrl}) => {
  return (
    <div className="carrousel" style={{ backgroundImage: `url(${imageUrl})` }}>
      <img className="carrousel__btn"
        src={BtnLeft}
        alt="Bouton du carrousel pour sélectionner l'image précedente"
      />
      <img className="carrousel__btn"
        src={BtnRight}
        alt="Bouton du carrousel pour sélectionner l'image suivante"
      />
    </div>
  );
};

Carrousel.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};
export default Carrousel;
