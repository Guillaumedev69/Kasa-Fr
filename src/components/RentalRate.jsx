import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/RentalRate.scss"

const RentalRate = () => {
    return (
        <div className="rate">
            <FontAwesomeIcon className="rate__icon color" icon={faStar} />
            <FontAwesomeIcon className="rate__icon color" icon={faStar} />
            <FontAwesomeIcon className="rate__icon color" icon={faStar} />
            <FontAwesomeIcon className="rate__icon grey" icon={faStar} />
            <FontAwesomeIcon className="rate__icon grey" icon={faStar} />
        </div>
    );
};

export default RentalRate;
