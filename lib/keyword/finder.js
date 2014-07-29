var cutter = require('../structures/cutter.js');
	util = require('../util.js');

module.exports = {
	findMostOccurred: function(input, count){
		var vocab = cutter.getAllVocabAndCount(input);
		return util.mergesort(vocab, "count").slice(0, count);
	},
}
