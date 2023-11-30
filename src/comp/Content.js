import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../cssFiles/Content.css";
import Welcome from "./Welcome.js";
import GridPanel from "./GridPanel.js";
import Calander from "./Calendar.js";
import App from "./App";

function Content() {
  let pageValue = "home";
  let currentDate = new Date();
  let urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("page")) {
    pageValue = urlParams.get("page");
  }

  if (pageValue === "home") {
    return (
      <div className="row mt-5" id="content">
        <App />
        <div
          className="d-none d-lg-block bg-body-tertiary rounded-2  col-7"
          data-bs-smooth-scroll="true"
          style={{ maxHeight: "500px", overflowY: "scroll" }}
        >
          <Welcome />
        </div>
        <div className="d-sm-block d-md-block d-lg-none bg-body-tertiary rounded-2  col-10 mx-5">
          <Welcome />
        </div>
      </div>
    );
  } else if (pageValue === "dashboard") {
    return <GridPanel />;
  } else if (pageValue === "calander") {
    return <Calander date={currentDate} />;
  }
}

export default Content;
