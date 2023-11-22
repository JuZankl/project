import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Profile from "../img/profile_picture.jpg";
import { auto } from "@popperjs/core";

function Impressum() {
  return (
    <div className="row bg-body-tertiary mt-5 p-5">
      <img
        src={Profile}
        className="col-6 img-fluid d-none d-md-block"
        style={{ maxWidth: "20%", maxHeight: auto }}
        alt="GitHub"
      />
      <div className="col-4 mx-5">
        <div className="row">
          <ul className="col-5 list-unstyled m-3">
            <li className="p-2">
              <h2>Media</h2>
            </li>
            <li className="p-2">
              <a href="https://github.com/JuZankl">GitHub</a>
            </li>
            <li className="p-2">
              <a href="https://linkedin.com/in/julian-zankl-4159b9296">
                LinkedIn
              </a>
            </li>
            <li className="p-2">
              <a href="https://www.instagram.com/juza0074/">Instagram</a>
            </li>
          </ul>
          <ul className="col-5 list-unstyled m-3">
            <li className="p-2">
              <h2>Tools</h2>
            </li>
            <li className="p-2">
              <a href="https://code.visualstudio.com">VSCode</a>
            </li>
            <li className="p-2">
              <a href="https://getbootstrap.com">Bootstrap</a>
            </li>
            <li className="p-2">
              <a href="https://react.dev">React</a>
            </li>
            <li className="p-2">
              <a href="https://https://github.com">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
