import _ from "lodash";

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
		return boxes
			.map(box => box.articles.join(""))
			.join("/");
	}

	pact(articles) {
		return _.flow(
			Robot.parseArticles,
			this.packager.pact,
			Robot.computeResult
		)(articles);
	}
}

export default Robot;
