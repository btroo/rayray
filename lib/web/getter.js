/*
	Website requests for use with identifying important information
	Let google do the work for relevancy
*/
var http = require('http'),
		htt = require('html-to-text');

var Getter = function(){};

Getter.prototype = {
	get: function(url, searchString, callback){
		var req = http.get(url, function(res){
			var data;
			res.on('data', function(chunk){
				data += chunk;
			});

			res.on('end', function() {
				var data = data;
				callback(data);
			});
		});

		req.on('error', function(e) {
		  console.log("Got error: " + e.message);
		});
	},
	getText: function(url, callback){
		this.get(url, function(data){
			var textData = htt.fromString(data);
			callback(textData);
		});
	},
	getURLForSearch: function(type, searchString){
		switch(type){
			case "google":
				var goodString = searchString.split(" ").join("+");
				return "https://www.google.com/#q=" + goodString; 
				break;
		}
	},
	getSearch: function(type, searchString, callback){
		var url = getURLForType(type, searchString)
		var req = http.get(url, function(res){
			var data;
			res.on('data', function(chunk){
				data += chunk;
			});

			res.on('end', function() {
				var data = data;
				callback(data);
			});
		});

		req.on('error', function(e) {
		  console.log("Got error: " + e.message);
		});
	},
	getTextSearch: function(type, callback){
		var url = getURLForType(type, searchString)
		this.get(url, function(data){
			var textData = htt.fromString(data);
			callback(textData);
		});
	},
}