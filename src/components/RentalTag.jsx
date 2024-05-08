import "../styles/RentalTag.scss";
import PropTypes from "prop-types";
const RentalTag = ({ textTag }) => {
  return <p>{textTag}</p>;
};
RentalTag.propTypes = {
  textTag: PropTypes.string.isRequired,
};
export default RentalTag;
