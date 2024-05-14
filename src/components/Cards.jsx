import "../styles/Cards.scss";
import PropTypes from "prop-types";

const Cards = ({ cardsTitle, cardsImg }) => {
  return (
    <div className="cards">
      <div className="cards__overlay"></div>
      <h2 className="cards__title">{cardsTitle}</h2>
      <img
        src={cardsImg}
        alt={`aperçu photo de la location : ${cardsTitle}"`}
        className="cards__img"
        />
    </div>
  );
};

Cards.propTypes = {
  cardsImg: PropTypes.string.isRequired,
  cardsTitle: PropTypes.string.isRequired,
};

export default Cards;
