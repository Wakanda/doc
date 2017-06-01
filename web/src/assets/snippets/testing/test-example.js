
// from /backend/tests/test-example.js

var chai = requireNode('chai');
var expect = chai.expect;

suite('Custom Tests', function(){
    suiteSetup(function(done){
    	done();
    });

    suite('Generic', function(){
        test('One succeed test example', function(){
        	var n = 314;
        	expect(n).to.be.a("number");
        	expect(n).to.equal(314);
        });

        test('One failed test example', function(){
        	var s = 'Hello';
            expect(s).to.be.a("string");
           	expect(s).to.equal("Hi");
        });
    });

    suiteTeardown(function(done) {
    	done();
    });

});
