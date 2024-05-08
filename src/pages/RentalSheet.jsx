import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImgTestCarrousel from "../assets/Background.png";
import RentalInfo from "../components/RentalInfo";

const Location = () => {
  return (
    <div>
      <Header />
      <Carrousel imageUrl={ImgTestCarrousel} />
      <RentalInfo
        rentalTitle="Cozy loft on the Canal Saint-Martin"
        rentalAdress="Paris, Îles-de-France"
        rentalRate="3 étoiles sur 5"
      />
      <Footer />
    </div>
  );
};

export default Location;
