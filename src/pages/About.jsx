import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBannerAbout from "../assets/ImgMontagne.webp";
import Dropdown from "../components/Dropdown";
import "../styles/Page.scss"

const About = () => {
  return (
    <div className="page">
      <div className="page__header">
      <Header />
      </div>
      <div className="page__main">
        <Banner imageUrl={ImageBannerAbout} withOpacity={false} />
        <section className="dropdownContainerAbout">
          <Dropdown
            titleDropdown="Fiabilité"
            contentDropdown="Les annonces postées sur Kasa garantissent une fiabilité totale.
            Les photos soient conformes aux logements,
            et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
          <Dropdown
            titleDropdown="Respect"
            contentDropdown="La bienveillance fait partie des valeurs fondatrices de Kasa.
             Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Dropdown
            titleDropdown="Service"
            contentDropdown="La bienveillance fait partie des valeurs fondatrices de Kasa.
           Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Dropdown
            titleDropdown="Sécurité"
            contentDropdown="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
            chaque logement correspond aux critères de sécurité établis par nos services.
            En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </section>
      </div>
      <div className="page__footer">
      <Footer />
      </div>
    </div>
  );
};

export default About;
