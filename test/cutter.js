var assert = require('assert'),
	_ = require('underscore-node'),
	expect = require('chai').expect,
	cutter = require('../index').Cutter;

describe('Cutter', function(){
	describe('#words', function(){
		beforeEach(function(done){
			passage = "I am a sentence. I am a group of words.\nI started a new paragraph";
			done();
		});

		it("should parse words correctly", function(done){
			var vocab = cutter.getAllVocab(passage);
			expect(vocab.length).to.equal(10);
			done();
		});

		it("parses words and count correctly", function(done){
			var vocab = cutter.getAllVocabAndCount(passage);
			expect(_.findWhere(vocab, {word: "a"}).count).to.equal(3);
			done();
		});
	});

	describe("#paragraphs", function(){
	
	});

	describe("#sentences", function(){

	});
});