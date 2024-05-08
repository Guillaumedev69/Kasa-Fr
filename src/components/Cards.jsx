import { Link } from "react-router-dom";
import "../styles/Cards.scss";
import PropTypes from "prop-types";

const Cards = ({ cardsTitle }) => {
  return (
    <Link to={"/RentalSheet"}>
    <div className="cards">
      <h2 className="cards__title">{cardsTitle}</h2>
    </div>
    </Link>
  );
};

Cards.propTypes = {
  cardsTitle: PropTypes.string.isRequired,
};

export default Cards;
