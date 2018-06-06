import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
// import { startLogger } from "./initializeLogger";
import {Resume} from "./pages/Resume";
// import { RockinRouter } from "./Router";

window.onload = () => {
  // startLogger();
  renderDOM();
};

function renderDOM() {
  const BASE_PATH: string = (window.location.origin === "https://sblack4.github.io") ? "sblack.rocks.old" : "";
  // const PAGE_LIST: string[] = ["About", "Contact", "Portfolio", "Resume"];
  // ReactDOM.render(<RockinRouter pages={PAGE_LIST} basePath={BASE_PATH} />,
  //   document.getElementById("root") as HTMLElement,
  // );
  ReactDOM.render(
    <Resume />,
    document.getElementById("root") as HTMLElement
  );
}
