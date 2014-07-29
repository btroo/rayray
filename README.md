# rayray

NLP tools to help you parse words, find counts, and find keywords. More functionality coming soon.

README will be updated soon.

# How to use
## Installation
```
npm install rayray
```

## Cutter
Usage:
```
var cutter = require('rayray').Cutter;

cutter.getAllVocab("I am a sentence."); // returns all vocabulary in the sentence
```
#### cutter.getAllDifferentTokens(input)

#### cutter.getAllDifferentTokensAndCount(input)

#### cutter.getAllVocab(input)

#### cutter.getAllVocabAndCount(input)

#### cutter.getParagraphs(input)

#### cutter.getSentences(input)

## Finder
Usage:
```
var finder = require('rayray').Finder;

finder.findMostOccurred("This is a cool sentence. cool cool cool.", 1); // find #1 most occurred word 
```

#### findMostOccurred(input, count)

## Getter
Usage:
```
var getter = require('rayray').Getter;

getter.get('http://www.brandontruong.com', function(data){
  console.log(data); // logs html of page
}); 
```

#### getter.get(url, callback)

#### getter.getText(url, callback)

#### getter.getURLForType(type, searchString)

#### getter.getSearchForType(type, searchString, callback)

#### getter.getTextSearch(type, callback)

# Contributing:
Rayray is in early stages. Open to any new features or feature requests. 
