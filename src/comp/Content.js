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
      <div className="row mt-5">
        <App />
        <Welcome />
      </div>
    );
  } else if (pageValue === "dashboard") {
    return <GridPanel />;
  }
}

export default Content;
