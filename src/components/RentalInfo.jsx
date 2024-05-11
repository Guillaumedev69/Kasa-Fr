import "../styles/RentalInfo.scss";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import RentalTag from "./RentalTag";
import RentalHost from "./RentalHost";
import RentalRate from "./RentalRate";
import data from "../../public/data.json"
import { useParams } from "react-router-dom"; 

const RentalInfo = ({ rentalTitle, rentalAdress }) => {
    const { id } = useParams();
  
    const Data = data.find((RentalInfo) => RentalInfo.id === id);
  return (
    <div className="info">
      <div className="info__firstline">
        <h1 className="info__title">{rentalTitle}</h1>
        <RentalHost nameHost={Data.host.name} imgHostUrl={Data.host.picture} />
      </div>
      <address className="info__adress">{rentalAdress}</address>
      <div className="info__secondline">
        <div className="tagContainer">
          <RentalTag textTag={Data.tags} />
        </div>
        <RentalRate rating={Data.rating} />
      </div>
      <div className="info__thirdline">
        <Dropdown titleDropdown="Description" />
        <Dropdown titleDropdown="Équipements" />
      </div>
    </div>
  );
};
RentalInfo.propTypes = {
  rentalTitle: PropTypes.string.isRequired,
  rentalAdress: PropTypes.string.isRequired,
};

export default RentalInfo;
