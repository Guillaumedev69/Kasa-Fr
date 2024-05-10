import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBannerAbout from "../assets/ImgMontagne.webp";
import Dropdown from "../components/Dropdown";

const About = () => {

  return (
    <div>
      <Header />
      <Banner imageUrl={ImageBannerAbout} withOpacity={false} />
      <section className="dropdownContainer">
      <Dropdown titleDropdrown="Fiabilité"/>
      <Dropdown titleDropdrown="Respect"/>
      <Dropdown titleDropdrown="Service"/>
      <Dropdown titleDropdrown="Sécurité"/>
      </section>
      <Footer />
    </div>
  );
};

export default About;
