const fs = require("fs");
const jsdom = require("jsdom");
const ReactDOM = require("react-dom");
const App = require("./App.js");

const html = fs.readFileSync("./template.html");

const dom = new jsdom.JSDOM(html, {
    url: "http://localhost",
    includeNodeLocations: false,
    runScripts: "outside-only",
});
window = dom.window;
window.eval(ReactDOM.render(App, window.document.querySelector("#root")));
console.log(dom.serialize());

