import "../styles/RentalHost.scss";
import PropTypes from "prop-types";
const RentalHost = ({ nameHost, imgHostUrl }) => {
  return (
    <div className="host">
      <div className="host__name">
        <p className="nametext">{nameHost}</p>
      </div>
      <div className="host__img">
        <img src={`url(${imgHostUrl})`} alt="Photo du loueur" />
      </div>
    </div>
  );
};
RentalHost.propTypes = {
  nameHost: PropTypes.string.isRequired,
  imgHostUrl: PropTypes.string.isRequired,
};
export default RentalHost;
