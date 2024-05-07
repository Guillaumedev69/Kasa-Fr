import { Link } from "react-router-dom";
import "../styles/MainNotFound.scss";
const MainNotFound = () => {
  return (
    <main>
      <h1 className="main__title">404</h1>
      <p className="main__text">Oups! La page que vous demandez nexiste pas.</p>
      <Link to="/" className="main__link">
        Retournez sur la page daccueil
      </Link>
    </main>
  );
};

export default MainNotFound;
