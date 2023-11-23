import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Terminal = ({ code, terminalName }) => {
  return (
    <div className="bg-black">
      <div className="bg-secondary">{terminalName}</div>
      <code style={{ whiteSpace: "pre-line" }}>{code}</code>
    </div>
  );
};

export default Terminal;
