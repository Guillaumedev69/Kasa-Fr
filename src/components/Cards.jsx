import "../styles/Cards.scss";
import PropTypes from "prop-types";

const Cards = ({ cardsTitle }) => {
  return (
    <div className="cards">
      <h2 className="cards__title">{cardsTitle}</h2>
    </div>
  );
};

Cards.propTypes = {
  cardsTitle: PropTypes.string.isRequired,
};

export default Cards;
