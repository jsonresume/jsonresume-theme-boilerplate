var fs = require("fs");
var Handlebars = require("handlebars");

module.exports = {
	render: function(resume) {
		var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");
		return Handlebars.compile(template)(resume);
	}
};
