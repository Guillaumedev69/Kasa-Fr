import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import data from "../../public/data.json";
import "../styles/RentalInfo.scss";
import Dropdown from "./Dropdown";
import RentalHost from "./RentalHost";
import RentalRate from "./RentalRate";
import RentalTag from "./RentalTag";
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
          {Data.tags.map((tag, index) => (
            <RentalTag key={index} textTag={tag} />
          ))}
        </div>
        <RentalRate rating={Data.rating} />
      </div>
      <div className="info__thirdline">
        <Dropdown
          titleDropdown="Description"
          contentDropdown={Data.description}
        />
        <Dropdown
          titleDropdown="Équipements"
          listDropdown={Data.equipments.map((equipment, index) => (
            <li key={index} className="dropdown__contentList">{equipment}</li>
          ))}
        />
      </div>
    </div>
  );
};
RentalInfo.propTypes = {
  rentalTitle: PropTypes.string.isRequired,
  rentalAdress: PropTypes.string.isRequired,
};
export default RentalInfo;
