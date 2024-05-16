import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/RentalRate.scss";
import data from "../../public/data.json";
import { useParams } from "react-router-dom";

const RentalRate = () => {
  const { id } = useParams();
  const Data = data.find((rating) => rating.id === id);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<FontAwesomeIcon key={i} className="grey" icon={faStar} />);
    }
    if (Data && Data.rating) {
      for (let i = 0; i < Data.rating; i++) {
        stars[i] = <FontAwesomeIcon key={i} className="color" icon={faStar} />;
      }
    }
    return stars;
  };

  return <div className="rate">{renderStars()}</div>;
};

export default RentalRate;
