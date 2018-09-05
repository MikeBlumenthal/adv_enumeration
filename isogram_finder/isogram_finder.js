const IsogramFinder = function (word) {
  this.word = word;
}



IsogramFinder.prototype.isIsogram = function () {
const letters = this.word.split('');
const lettersLC = letters.map(letter => letter.toLowerCase());
const letterCount = {};
let result = true;

for (const letter of lettersLC) {
  if (letterCount[letter]) {
    letterCount[letter] += 1;
  } else {
    letterCount[letter] = 1;
  }
};
for (const letter in letterCount) {
  if (letterCount[letter] > 1) {
    result = false;
  }
}
return result;

}

module.exports = IsogramFinder;
