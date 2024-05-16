import Header from "../components/Header";
import Footer from "../components/Footer";
import MainNotFound from "../components/MainNotFound";
import "../styles/Page.scss";

const NotFound = () => {
  return (
    <div className="page">
      <div className="page__header">
        <Header />
      </div>
      <div className="page__main">
        <MainNotFound />
      </div>
      <div className="page__footer">
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
