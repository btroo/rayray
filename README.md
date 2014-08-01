# rayray

NLP tools to help you parse words, find counts, and find keywords. More functionality coming soon.

README will be updated soon.

## Installation
```
npm install rayray
```

## Finder
Usage:
```
var finder = require('rayray').finder;

finder.getAllVocab("I am a sentence."); // returns all vocabulary in the sentence
```
#### finder.getAllDifferentTokens(input)
*input* - text you want to parse
Returns array of all different tokens
#### finder.getAllDifferentTokensAndCount(input)
*input* - text you want to parse
Returns array of objects of all different tokens with count 
#### finder.getAllVocab(input)
*input* - text you want to parse
Returns array of all different words
#### finder.getAllVocabAndCount(input)
*input* - text you want to parse
Returns array of all different words and count
#### finder.getSentences(input)
*input* - text you want to parse
Returns array of all sentences
#### finder.getParagraphs(input)
*input* - text you want to parse
Returns array of all paragraphs
#### findMostOccurred(input, count)
*input* - array of objects from an 'AndCount' method above
*count* - how far you want your list to be
Returns array of top counted items
# Contributing:
Rayray is in early stages. Open to any new features or feature requests. 
