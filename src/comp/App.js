import "../cssFiles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AboutMeCards from "./AboutMeCards";
import image1 from "../img/dayOut1.jpg";

function App() {
  return (
    <div
      className="container col-4 overflow-auto d-none d-lg-block "
      style={{ maxHeight: "500px" }}
    >
      <h1 className="mx-auto">About My own Adventures</h1>
      <AboutMeCards
        content={
          "Ein schöner besuch im Haus des Meeres in Wien. Von Reptilien bis zu Primaten, hier kann man alles finden. Die Einzigen negativen Aspekte sind die vielen Stockwerke und die hohen Preise! "
        }
        title={"Haus des Meeres"}
        img={image1}
      />
    </div>
  );
}

export default App;
