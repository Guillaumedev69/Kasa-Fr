import "../styles/RentalInfo.scss";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import RentalTag from "./RentalTag";
import RentalHost from "./RentalHost";
import RentalRate from "./RentalRate";


const RentalInfo = ({ rentalTitle, rentalAdress }) => {
  return (
    <div className="info">
      <div className="info__firstline">
        <h1 className="info__title">{rentalTitle}</h1>
        <RentalHost firstNameHost="Alexandre" nameHost="Dumas" imgHostUrl="" />
      </div>
      <address className="info__adress">{rentalAdress}</address>
      <div className="info__secondline">
        <div className="tagContainer">
          <RentalTag textTag="Cozy" />
          <RentalTag textTag="Canal" />
          <RentalTag textTag="Paris 10" />
        </div>
        <RentalRate/>
      </div>
      <div className="info__thirdline">
        <Dropdown titleDopdrown="Description" />
        <Dropdown titleDopdrown="Équipements" />
      </div>
    </div>
  );
};
RentalInfo.propTypes = {
  rentalTitle: PropTypes.string.isRequired,
  rentalAdress: PropTypes.string.isRequired,
};
export default RentalInfo;
