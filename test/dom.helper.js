var path = require("path");
require("jsdom-global")();
var afPath = path.join(__dirname, "../appframework.js");

// html: html to load into the window
// jsFiles: array of paths to js files to load into the window;
// loads af core by default
module.exports = function (html) {
    if (!("$" in global)) {
        require(afPath);
        global.$ = window.$;
    }

    if (html) {
        window.document.querySelector("body").innerHTML = html;
    }
};
