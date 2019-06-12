const {describe} = require("mocha");
const {expect} = require("chai");

const {SimplePackager} = require("../../main/packager/simplePackager");

describe('Simple packager', function () {

    it('should put two articles in same box if size fit', function () {
        // Given
        const packager = new SimplePackager();

        // When
        const res = packager.pact([5, 4]);

        // Then
        expect(res.length).to.equal(1);
    });

    it('should open new box if article cannot fit in the current box', function () {
        // Given
        const packager = new SimplePackager();

        // When
        const res = packager.pact([5, 4, 8]);

        // Then
        expect(res.length).to.equal(2);
    });

    it('should pact articles in boxes without any optimization', function () {
        // Given
        const packager = new SimplePackager();

        // When
        const res = packager.pact([1, 6, 3, 8, 4, 1, 6, 8, 9, 5, 2, 5, 7, 7, 3]);

        // Then
        expect(res.length).to.equal(10);
        expect(res[0].articles).to.eql([1, 6, 3]);
        expect(res[1].articles).to.eql([8]);
        expect(res[2].articles).to.eql([4, 1]);
        expect(res[3].articles).to.eql([6]);
        expect(res[4].articles).to.eql([8]);
        expect(res[5].articles).to.eql([9]);
        expect(res[6].articles).to.eql([5, 2]);
        expect(res[7].articles).to.eql([5]);
        expect(res[8].articles).to.eql([7]);
        expect(res[9].articles).to.eql([7, 3]);
    });

});
