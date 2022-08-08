require("file-loader?name=[name].[ext]!html-minify-loader!./index.html");
require("file-loader?name=[name].[ext]!./index.css");

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLDivElement);
root.render(<App />);
