// get all words, the word length is more than 4 including 4

const sentence = "The quick brown fox jumps over the lazy dog";

const newSentence = sentence.split(' ');

const result = newSentence.filter((word) => word.indexOf('o') !== -1);

console.log(result);
