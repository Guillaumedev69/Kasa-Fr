import { Link } from "react-router-dom";
import "../styles/Cards.scss";
import PropTypes from "prop-types";

const Cards = ({ cardsTitle, cardsImg }) => {
  return (
    <Link to={"/RentalSheet"}>
    <div className="cards">
      <h2 className="cards__title">{cardsTitle}</h2>
      <img src={cardsImg} alt={`aperçu photo de la location : ${cardsTitle}"`} className="cards__img"/>
    </div>
    </Link>
  );
};

Cards.propTypes = {
  cardsImg: PropTypes.string.isRequired,
  cardsTitle: PropTypes.string.isRequired,
};

export default Cards;
