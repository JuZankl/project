import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const AboutMeCards = ({ content, img, title }) => {
  return (
    <div className="w-75 card mx-auto">
      <img src={img} className="card-img-top" alt="Insight" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text ">{content}</p>
      </div>
    </div>
  );
};

export default AboutMeCards;
