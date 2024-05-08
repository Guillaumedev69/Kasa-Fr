import "../styles/RentalHost.scss";
import PropTypes from "prop-types";
const RentalHost = ({ nameHost, imgHostUrl }) => {
  return (
    <div>
      <p>{nameHost}</p>
      <img src={`url(${imgHostUrl})`} alt="Photo de profil du loueur" />
    </div>
  );
};
RentalHost.propTypes = {
  nameHost: PropTypes.string.isRequired,
  imgHostUrl: PropTypes.string.isRequired,
};
export default RentalHost;
