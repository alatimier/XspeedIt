const _ = require("lodash");

class Robot {

	constructor(packager) {
		this.packager = packager;
	}

	static parseArticles(articles) {
		if (isNaN(articles)) {
			throw new Error("Invalid articles");
		}
		return articles.split().map(Number);
	}

	static computeResult(boxes) {
		return boxes.join("/");
	}

	packageArticles(articles) {
		return _.flow(
			Robot.parseArticles,
			this.packager.package,
			Robot.computeResult
		)(articles);
	}
}

module.exports = {Robot};
