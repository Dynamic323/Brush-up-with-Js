import { createRoot } from "react-dom/client";
import { createElement } from "react";
import Output from "./Output";

createRoot(document.getElementById("root")).render(
  // createElement("h1", null, createElement("span", { className:"my_span " }, "Hello form span in h1 tag"))
  <Output />

  // <h1>
  //   <span className="my_span"> Hello form span in h1 tag </span>
  // </h1>
);
