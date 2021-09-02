var string1 = "This is the longest string ever.";
var string2 = "This is the shortest string ever.";
var string3 = "This is the thing called Mount Everest.";
var string4 = "This is the Sherman on the Mount .";

var regx = /this/; // case sensitive

console.log(regx.test(string1));
console.log(regx.test(string2));
console.log(regx.test(string3));
console.log(regx.test(string4));

var regx = /this/i; // not case sensitive
var regx = /^this/i; // at the beginning
