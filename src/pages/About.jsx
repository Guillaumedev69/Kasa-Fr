import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBannerAbout from "../assets/ImgMontagne.webp";

const About = () => {
  return (
    <div>
      <Header />
      <Banner imageUrl={ImageBannerAbout} withOpacity={false} />
      <Footer />
    </div>
  );
};

export default About;
