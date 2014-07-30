var natural = require('natural'),
		tokenizer = new natural.WordTokenizer(),
		_ = require('underscore-node'),
		pos = require('pos'),
		tp = require('text-parse');

module.exports = {
	getAllDifferentTokens: function(input){
		var parsed = tokenizer.tokenize(input);
		var vocab = [];

		parsed.forEach(function(word){ // Only add if not there
			if(!_.contains(vocab, word)){
				vocab.push(word);
			}
		});

		return vocab;
	},
	getAllDifferentTokensAndCount: function(input){
		var parsed = tokenizer.tokenize(input);
		var tokensAndCount = [];

		parsed.forEach(function(word, index){
			if(!vocabAndCount.hasOwnProperty(word)){
				vocabAndCount[word] = {
					count: 1,
				}
				var newForArray = vocabAndCount[word];
				newForArray.word = word;
				vc.push(newForArray);
			} else { 
				vocabAndCount[word].count++;
			}
		});

		return vocab;
	},
	getAllVocab: function(input){
		var parsed = tokenizer.tokenize(input);
		var vocab = [];

		parsed.forEach(function(word){
			if(!_.contains(vocab, word) && /^\w+$/.test(word)){
				vocab.push(word);
			}
		});

		return vocab;

	},
	getAllVocabAndCount: function(input){
		var parsed = tokenizer.tokenize(input),
			vocabAndCount = {},
			vc = [];

		parsed.forEach(function(word, index){
			if(/^\w+$/.test(word)){
				if(!vocabAndCount.hasOwnProperty(word)){
				vocabAndCount[word] = {
					count: 1,
				}
				var newForArray = vocabAndCount[word];
				newForArray.word = word;
				vc.push(newForArray);
				} else { 
				vocabAndCount[word].count++;
				}
			}
		});

		return vc;
	},
	getParagraphs: function(input){
		return input.split("\n"); // how to parse paragraphs in all cases?
	},
	getSentences: function(input){
		var sentences = input.split(/[\.\?\!\;]/ig);

		sentences.forEach(function(sentence){
			sentence.trim();
		});

		return sentences;
	},
	findMostOccurred: function(input, count){
		var vocab = this.getAllVocabAndCount(input);
		return util.mergesort(vocab, "count").slice(0, count);
	},
}
