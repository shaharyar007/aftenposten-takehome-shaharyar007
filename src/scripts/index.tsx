import * as React from "react";
import * as ReactDOM from "react-dom";
import "../styles/index.scss";

const apiUrl = "http://localhost:5000/api";

let activeSection: string = "nyheter";

function HelloWorld(): React.ReactElement {
  return <div>Hello world</div>;
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
