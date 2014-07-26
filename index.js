var fs = require("fs");
var Handlebars = require("handlebars");

function render(resume) {
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");
	return Handlebars.compile(template)(resume);
}

module.exports = {
	render: render
};
