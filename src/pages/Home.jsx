import { useState } from "react";
import data from "../../public/data.json";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ImageBanner from "../assets/ImgPlage.webp";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Page.scss";

const Home = () => {
  const [cardsToShow, setCardsToShow] = useState(6);

  const loadMoreCards = () => {
    setCardsToShow((prevCount) => prevCount + 6);
  };

  return (
    <div className="page">
      <div className="page__header">
        <Header />
      </div>
      <div className="page__main">
        <Banner
          imageUrl={ImageBanner}
          titleBanner={
            <p>
              Chez vous, <span>partout et ailleurs</span>
            </p>
          }
          withOpacity={true}
        />
        <div className="containerCards">
          {data.slice(0, cardsToShow).map((location, index) => (
            <Link key={location.id} to={`/rentalSheet/${location.id}`}>
              <Cards
                key={`${location.id}-${index}`}
                cardsImg={location.cover}
                cardsTitle={location.title}
              />
            </Link>
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
      </div>
      <div className="page__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
