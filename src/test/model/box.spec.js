import {describe} from "mocha";
import {expect} from "chai";
import Box from "../../main/model/box";

describe('Box', function () {

	it('should throw exception if article is too big for the box', function () {
		// Given
		const box = new Box();
		box.addArticle(9);

		// Then
		expect(() => box.addArticle(2)).to.throw("Not enough space !");
	});

	it('should not throw exception if article can fit in the box', function () {
		// Given
		const box = new Box();
		box.addArticle(9);

		// Then
		expect(() => box.addArticle(1)).to.not.throw();
	});

});
