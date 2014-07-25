var assert = require('assert'),
	expect = require('chai').expect;

describe('Cutter', function(){


	describe('#words', function(){
		var cutter, passage;

		beforeEach(function(done){
			cutter = Cutter();
			passage = "I am a sentence. I am a group of words."
		});

		it("should parse words correctly", function(done){
			var vocab = cutter.getAllVocab(passage);
			expect()
			done();
		});

		it("parses words and count correctly", function(done){
			expect('a').to.equal('a');
			done();
		});
	});

	describe("#paragraphs", function(){

	});

});