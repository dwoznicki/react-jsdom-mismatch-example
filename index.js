const ReactDOM = require("react-dom");
const App = require("./App.js");

if (window.PRERENDER) {
    ReactDOM.render(App, document.querySelector("#root"));
} else {
    ReactDOM.hydrate(App, document.querySelector("#root"));
}

