import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Day = ({ day, importance }) => {
  return (
    <div className={`col border`}>
      <div style={{ position: "relative", height: "100px" }}>
        <p
          className={`text-${importance}`}
          style={{ position: "absolute", top: "0", left: "0" }}
        >
          {`${day}`}
        </p>
      </div>
    </div>
  );
};

export default Day;
