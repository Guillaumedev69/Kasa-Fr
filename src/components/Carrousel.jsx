import { useState } from "react";
import "../styles/Carrousel.scss";
import BtnLeft from "../assets/BtnCarrouselLeft.png";
import BtnRight from "../assets/BtnCarrouselRight.png";
import data from "../../public/data.json";
import { useParams } from "react-router-dom";

const Carrousel = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rentalData = data.find((item) => item.id === id);
  const pictures = rentalData ? rentalData.pictures : [];

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carrousel">
      <img className="carrousel__img" src={pictures[currentImageIndex]} alt="photo de l'appartement à louer" />
      <img
        className="carrousel__btn btnleft"
        src={BtnLeft}
        alt="Bouton du carrousel pour sélectionner l'image précédente"
        onClick={handlePrevClick}
      />
      <img
        className="carrousel__btn btnright"
        src={BtnRight}
        alt="Bouton du carrousel pour sélectionner l'image suivante"
        onClick={handleNextClick}
      />
    </div>
  );
};

export default Carrousel;