var natural = require('natural'),
		tokenizer = new natural.WordTokenizer(),
		_ = require('underscore-node'),
		pos = require('pos'),
		tp = require('text-parse');

var Cutter = function(){};

Cutter.prototype = {
	getAllVocab: function(input){
		var parsed = tokenizer.tokenize(input);
		var vocab = [];

		parsed.forEach(function(word){
			if(!_.contains(vocab, word)){
				vocab.push(word);
			}
		});

		return vocab;
	},
	getAllVocabAndCount: function(input){
		var parsed = tokenizer.tokenize(input),
			vocabAndCount = {};

		// put all into JSON with 1 count
		parsed.forEach(function(word){
			if(!vocabAndCount.hasOwnProperty(word)){
				vocabAndCount[word] = {
					count: 1
				}
			} else { // increment counts as they come
				vocabAndCount[word].count++
			}
		});
		return vocabAndCount;
	},
	getParagraphs: function(input){
		return input.split("\n"); // how to parse paragraphs in all cases?
	},
	getSentences: function(input){
		return input.split(/[\.\?\!\;]/ig);
	}
}

module.exports = Cutter;