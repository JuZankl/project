import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Card = ({ content, status, title }) => {
  // Bestimme die Hintergrundfarbe basierend auf dem Status
  const backgroundColorClass = `card text-bg-${status.toLowerCase()}`;

  return (
    <div className={backgroundColorClass}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default Card;
