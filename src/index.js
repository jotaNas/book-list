import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./features/Home";

const title = process.env.REACT_APP_NAME;

ReactDOM.render(<Home title={title} />, document.getElementById("root"));
