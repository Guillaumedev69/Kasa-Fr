import "../styles/RentalTag.scss";
import PropTypes from "prop-types";
const RentalTag = ({ textTag }) => {
  return (
    <div className="tag">
      <p className="tag__text">{textTag}</p>
    </div>
  );
};
RentalTag.propTypes = {
  textTag: PropTypes.string.isRequired,
};
export default RentalTag;
