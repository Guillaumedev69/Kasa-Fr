import Header from "../components/Header";
import Banner from "../components/Banner";
import ImageBanner from "../assets/ImgPlage.webp";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        imageUrl={ImageBanner}
        titleBanner="Chez vous, partout et ailleurs"
        withOpacity={true}
      />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
