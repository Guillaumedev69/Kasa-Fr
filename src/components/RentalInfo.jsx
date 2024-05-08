import "../styles/RentalInfo.scss";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import RentalTag from "./RentalTag";
import RentalHost from "./RentalHost";

const RentalInfo = ({ rentalTitle, rentalAdress, rentalRate }) => {
  return (
    <div>
      <h1>{rentalTitle}</h1>
      <div className="idHost">
        <RentalHost nameHost="Alexandre Dumas" imgHostUrl="" />
      </div>
      <address>{rentalAdress}</address>
      <div className="tagContainer">
        <RentalTag textTag="Cozy" />
        <RentalTag textTag="Canal" />
        <RentalTag textTag="Paris 10" />
      </div>
      <div className="rate">{rentalRate}</div>
      <Dropdown titleDopdrown="Description" />
      <Dropdown titleDopdrown="Équipements" />
    </div>
  );
};
RentalInfo.propTypes = {
  rentalTitle: PropTypes.string.isRequired,
  rentalAdress: PropTypes.string.isRequired,
  rentalRate: PropTypes.string.isRequired,
};
export default RentalInfo;
