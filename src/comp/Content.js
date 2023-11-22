import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../cssFiles/Content.css";
import Welcome from "./Welcome.js";
import GridPanel from "./GridPanel.js";
import App from "./App";

function Content() {
  var path = window.location.pathname;
  if (path === "/project") {
    return (
      <div className="row mt-5">
        <App />
        <Welcome />
      </div>
    );
  } else if (path === "/project/dashboard") {
    return <GridPanel />;
  }
}

export default Content;
