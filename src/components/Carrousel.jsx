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
  const pictures = rentalData && rentalData.pictures ? rentalData.pictures : [];

  function handlePrevClick() {
    setCurrentImageIndex(
      currentImageIndex === 0 ? pictures.length - 1 : currentImageIndex - 1
    );
  }

  function handleNextClick() {
    setCurrentImageIndex(
      currentImageIndex === pictures.length - 1 ? 0 : currentImageIndex + 1
    );
  }

  return (
    <div className="carrousel">
      {pictures.map((pictures, index) => (
        <img
          key={index}
          className="carrousel__img"
          src={pictures}
          alt="photo de l'appartement à louer"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        />
      ))}
      {pictures.length > 1 && (
        <>
          <img
            className="carrousel__btn btnleft"
            src={BtnLeft}
            alt="Bouton du carrousel pour sélectionner l'image précédente"
            onClick={handlePrevClick}
          />
          <div className="carrousel__counter">
            {currentImageIndex + 1}/{pictures.length}
          </div>
          <img
            className="carrousel__btn btnright"
            src={BtnRight}
            alt="Bouton du carrousel pour sélectionner l'image suivante"
            onClick={handleNextClick}
          />
        </>
      )}
    </div>
  );
};

export default Carrousel;
