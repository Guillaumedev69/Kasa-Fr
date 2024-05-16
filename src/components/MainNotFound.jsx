import { Link } from "react-router-dom";
import "../styles/MainNotFound.scss";
const MainNotFound = () => {
  return (
    <main className="main404">
      <h1 className="main404__title">404</h1>
      <p className="main404__text">Oups! La page que vous demandez nexiste pas.</p>
      <Link to="/" className="main404__link">
        Retournez sur la page daccueil
      </Link>
    </main>
  );
};

export default MainNotFound;
