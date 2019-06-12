const {Box} = require("../main/model/box");
const {describe} = require("mocha");
const {expect} = require("chai");
const {stub} = require("sinon");
const {Robot} = require("../main/robot");

describe('Robot', function () {

	let noOpPackager;

	beforeEach(function () {
		noOpPackager = {
			package() {
				return [];
			}
		};
	});

	describe('Input validation', function () {
		it('should throw exception if articles is not numeric', function () {
			// Given
			const robot = new Robot(noOpPackager);
			const articles = "abc";

			// Then
			expect(() => robot.packageArticles(articles)).to.throw("Invalid articles");
		});

		it('should not throw exception if articles is numeric', function () {
			// Given
			const robot = new Robot(noOpPackager);
			const articles = "123";

			// Then
			expect(() => robot.packageArticles(articles)).to.not.throw();
		});
	});

	describe('Output format', function () {
		it('should compute boxes content separated with slashes', function () {
			// Given
			const robot = new Robot(noOpPackager);
			const articles = "123";

			stub(noOpPackager, "package").returns([new Box([9, 1]), new Box([7, 2]), new Box([6, 1])]);

			// When
			const res = robot.packageArticles(articles);

			// Then
			expect(res).to.equal("91/72/61");
		});

		it('should compute empty string if no article', function () {
			// Given
			const robot = new Robot(noOpPackager);
			const articles = "";

			// When
			const res = robot.packageArticles(articles);

			// Then
			expect(res).to.equal("");
		});
	});

});
