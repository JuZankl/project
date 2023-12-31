import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card from "./Card.js";

function GridPanel() {
  return (
    <div className="row mt-5">
      <div className="col-sm-6 mb-3 mb-sm-0 mt-3">
        <Card
          content="Getting the other Content when loading other URL Pathes."
          status="Success"
          title="Loading Contents"
        />
      </div>
      <div className="col-sm-6 mb-3 mb-sm-0 mt-3">
        <Card
          content="Add new Comp for the shown Grid and the Cards"
          status="Success"
          title="Making Achievements work"
        />
      </div>
      <div className="col-sm-6 mb-3 mb-sm-0 mt-3">
        <Card
          content="Try to make the Impressum responsive"
          status="Info"
          title="Impressum"
        />
      </div>
      <div className="col-sm-6 mb-3 mb-sm-0 mt-3">
        <Card
          content="Adding more Info in the Home Welcome Comp"
          status="Success"
          title="Welcome update"
        />
      </div>
      <div className="col-sm-6 mb-3 mb-sm-0 mt-3">
        <Card
          content="Adding Info Cards About my Life"
          status="Success"
          title="MyLife Cards"
        />
      </div>
      <div className="col-sm-6 mb-3 mb-sm-0 mt-3">
        <Card
          content="Make Info Cards About my Life Responsive"
          status="Info"
          title="MyLife Cards Resp"
        />
      </div>
      <div className="col-sm-6 mb-3 mb-sm-0 mt-3">
        <Card content="Make a Calendar" status="Success" title="Calendar" />
      </div>
      <div className="col-sm-6 mb-3 mb-sm-0 mt-3">
        <Card
          content="Create Content in Calendar"
          status="Info"
          title="Calendar Content"
        />
      </div>
    </div>
  );
}

export default GridPanel;
