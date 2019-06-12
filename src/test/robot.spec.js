const {describe} = require("mocha");
const {expect} = require("chai");

const robot = require('../main/robot');

describe('Robot', function () {

	it('should throw exception if articles is not numeric', function () {
		// Given
		const articles = "abc";

		// Then
		expect(() => robot.pactArticles(articles)).to.throw("Invalid articles");
	});

	it('should not throw exception if articles is numeric', function () {
		// Given
		const articles = "123";

		// Then
		expect(() => robot.pactArticles(articles)).to.not.throw();
	});

});