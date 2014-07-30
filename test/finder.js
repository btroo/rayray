var assert = require('assert'),
	_ = require('underscore-node'),
	expect = require('chai').expect,
	finder = require('../index').Finder;

describe('Cutter', function(){
	var passage;

	beforeEach(function(done){
		passage = "I am a sentence. I am a group of words.\nI started a new paragraph";
		done();
	});

	describe('#words', function(){
		it("should parse words correctly", function(done){
			var vocab = finder.getVocab(passage);
			expect(vocab.length).to.equal(10);
			done();
		});

		it("should parse words and count correctly", function(done){
			var vocab = finder.getVocabAndCount(passage);
			expect(_.findWhere(vocab, {word: "a"}).count).to.equal(3);
			done();
		});

		it("should get all vocab with over one occurrence", function(done){
			var vocab = finder.findOverOne(finder.getVocabAndCount(passage));
			expect(vocab.length).to.equal(3);
			done();
		});

		
	});

	describe("#sentences", function(){
		it("should parse sentences correctly", function(done){
			// todo
			done();
		});
	});

	describe("#paragraphs", function(){

	});

});