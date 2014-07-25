//
// Run your theme locally.
//
// This script looks for a local `index.js` file and will then
// try to call `index.render()`.
//
// Requirement:
// `npm install resume-schema`
//
// Usage:
// `node serve.js
//

var http = require("http");
var resume = require("resume-schema").resumeJson;
var theme = require("./index.js");

http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(render());
}).listen(8080);

console.log("Serving theme");
console.log("Preview: http://localhost:8080/");

function render() {
	try {
		return theme.render(resume);
	} catch(e) {
		console.log("Error: " + e.message);
		return "";
	}
}
