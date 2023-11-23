import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../cssFiles/Content.css";
import Welcome from "./Welcome.js";
import GridPanel from "./GridPanel.js";
import App from "./App";

function Content() {
  let pageValue = "home";
  let urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("page")) {
    pageValue = urlParams.get("page");
  }

  if (pageValue === "home") {
    return (
      <div className="row mt-5" id="content">
        <App />
        <div
          className="d-none d-lg-block overflow-scroll bg-body-tertiary rounded-2  col-7 max-height-300"
          data-bs-smooth-scroll="true"
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
  }
}

export default Content;
