class Box {

	constructor(articles = []) {
		this.maxSize = 10;
		this.articles = articles;
	}

	getSize() {
		return this.articles.reduce((a, b) => a + b, 0)
	}

	getAvailableSpace() {
		return this.maxSize - this.getSize();
	}

	addArticle(article) {
		if (this.getAvailableSpace() < article) {
			throw new Error("Not enough space !")
		}
		this.articles.push(article);
	}

}

export default Box;