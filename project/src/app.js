require("./app.css");

document.write(require("./content.js"));

import React from "react";
import ReactDOM from "react-dom";

let test = 'test';

// create/re-create virtual dom
export default function tick() {
    const root = React.createElement(
        "div",
        null,
        React.createElement("h1", null, "Hello world!"),
        React.createElement("h2", null, `It is ${new Date}`)
    );

    ReactDOM.render(root, document.getElementById("container"));
}

setInterval(tick, 1000);