import {describe} from "mocha";
import {expect} from "chai";
import OptimizedPackager from "../../main/packager/optimizedPackager";

describe('Optimized packager', function () {

	it('should put two articles in same box if size fit', function () {
		// Given
		const packager = new OptimizedPackager();

		// When
		const res = packager.pact([5, 4]);

		// Then
		expect(res.length).to.equal(1);
	});

	it('should open new box if article cannot fit in the first box', function () {
		// Given
		const packager = new OptimizedPackager();

		// When
		const res = packager.pact([5, 4, 8]);

		// Then
		expect(res.length).to.equal(2);
	});

	it('should pact articles in boxes with optimization', function () {
		// Given
		const packager = new OptimizedPackager();

		// When
		const res = packager.pact([1, 6, 3, 8, 4, 1, 6, 8, 9, 5, 2, 5, 7, 7, 3]);

		// Then
		expect(res.length).to.equal(8);
		expect(res[0].articles).to.eql([1, 6, 3]);
		expect(res[1].articles).to.eql([8, 1]);
		expect(res[2].articles).to.eql([4, 6]);
		expect(res[3].articles).to.eql([8, 2]);
		expect(res[4].articles).to.eql([9]);
		expect(res[5].articles).to.eql([5, 5]);
		expect(res[6].articles).to.eql([7, 3]);
		expect(res[7].articles).to.eql([7]);
	});

});
