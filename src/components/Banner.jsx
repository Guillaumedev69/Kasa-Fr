import "../styles/Banner.scss";
import PropTypes from "prop-types";

const Banner = ({ imageUrl, titleBanner, withOpacity }) => {
  const bannerClassName = `banner ${withOpacity ? "banner__withOpacity" : ""}`;
  return (
    <div className={bannerClassName} style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1 className="banner__title">{titleBanner}</h1>
    </div>
  );
};

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  titleBanner: PropTypes.string.isRequired,
  withOpacity: PropTypes.bool.isRequired,
};

export default Banner;
