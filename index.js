// module.exports = require('./lib/');

var cutter = require('./lib/').Cutter,
		v = new cutter();

console.log(v.getSentences("This is a/ sentence. Is this a sentence? Yes, it is."));