import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RentalInfo from "../components/RentalInfo";
import "../styles/RentalSheet.scss";
import data from "../../public/data.json";
import { useParams } from "react-router-dom";

const Location = () => {
  const { id } = useParams();

  const Data = data.find((RentalSheet) => RentalSheet.id === id);

  return (
    <div>
      <Header />
      <div className="main">
        {Data && (
          <>
            <Carrousel />
            <RentalInfo
              rentalTitle={Data.title}                                                                     
              rentalAdress={Data.location}
              rentalRate={Data.rating}
            />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Location;
