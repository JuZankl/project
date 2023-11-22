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
      />
      <div className="col-4 mx-5">
        <div className="row">
          <ul className="col-5 list-unstyled m-3">
            <li className="p-2">
              <h2>Stuff</h2>
            </li>
            <li className="p-2">
              <a href="#">This</a>
            </li>
            <li className="p-2">
              <a href="#">Is</a>
            </li>
            <li className="p-2">
              <a href="#">Some</a>
            </li>
            <li className="p-2">
              <a href="#">Nice</a>
            </li>
            <li className="p-2">
              <a href="#">Stuff</a>
            </li>
          </ul>
          <ul className="col-5 list-unstyled m-3">
            <li className="p-2">
              <h2>Stuff</h2>
            </li>
            <li className="p-2">
              <a href="#">This</a>
            </li>
            <li className="p-2">
              <a href="#">Is</a>
            </li>
            <li className="p-2">
              <a href="#">Some</a>
            </li>
            <li className="p-2">
              <a href="#">Nice</a>
            </li>
            <li className="p-2">
              <a href="#">Stuff</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
