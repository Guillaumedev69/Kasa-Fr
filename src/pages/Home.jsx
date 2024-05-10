import { useState } from "react";
import data from "../../public/data.json";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ImageBanner from "../assets/ImgPlage.webp";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [cardsToShow, setCardsToShow] = useState(6);

  const loadMoreCards = () => {
    setCardsToShow((prevCount) => prevCount + 6);
  };

  return (
    <div>
      <Header />
      <Banner
        imageUrl={ImageBanner}
        titleBanner="Chez vous, partout et ailleurs"
        withOpacity={true}
      />
      <div className="containerCards">
        {data.slice(0, cardsToShow).map((location, index) => (
          <Cards
            key={`${location.id}-${index}`}
            cardsImg={location.cover}
            cardsTitle={location.title}
          />
        ))}

        {cardsToShow < data.length && (
          <button className="containerCards__btn" onClick={loadMoreCards}>
            <FontAwesomeIcon icon={faAnglesDown} />
            Afficher plus
            <FontAwesomeIcon icon={faAnglesDown} />
          </button>
        )}

        {cardsToShow < data.length}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
