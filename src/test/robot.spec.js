import {describe} from "mocha";
import {stub} from "sinon";
import {expect} from "chai";
import Robot from "../main/robot";
import Box from "../main/model/box";

describe('Robot', function () {

	let noOpPackager;

	beforeEach(function () {
		noOpPackager = {
			pact() {
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
			expect(() => robot.pact(articles)).to.throw("Invalid articles");
		});

		it('should not throw exception if articles is numeric', function () {
			// Given
			const robot = new Robot(noOpPackager);
			const articles = "123";

			// Then
			expect(() => robot.pact(articles)).to.not.throw();
		});
	});

	describe('Output format', function () {
		it('should compute boxes content separated with slashes', function () {
			// Given
			const robot = new Robot(noOpPackager);
			const articles = "123";

			stub(noOpPackager, "pact").returns([new Box([9, 1]), new Box([7, 2]), new Box([6, 1])]);

			// When
			const res = robot.pact(articles);

			// Then
			expect(res).to.equal("91/72/61");
		});

		it('should compute empty string if no article', function () {
			// Given
			const robot = new Robot(noOpPackager);
			const articles = "";

			// When
			const res = robot.pact(articles);

			// Then
			expect(res).to.equal("");
		});
	});

});
