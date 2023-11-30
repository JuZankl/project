import { Text_g, Text_e } from "../text/WelcomeContent";

function Welcome() {
  let pageValue = "g";
  let urlParams = new URLSearchParams(window.location.search);
  let content = <Text_g />;

  if (urlParams.has("language")) {
    pageValue = urlParams.get("language");
  }
  if (pageValue === "g") {
    content = <Text_g />;
  } else if (pageValue === "e") {
    content = <Text_e />;
  }

  return content;
}

export default Welcome;
