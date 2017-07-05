
// from /backend/tests/example.spec.js

var chai = requireNode('chai');
var expect = chai.expect;

describe('My BDD Unit Tests', function() {
    it('should succeed', function(done) {
    	var n = 314;
    	expect(n).to.be.a("number");
    	expect(n).to.equal(314);
        done();
    });
    it('should fail', function(done) {
        	var s = 'Hello';
            expect(s).to.be.a("string");
           	expect(s).to.equal("Hi");
           	done();
    });

});
