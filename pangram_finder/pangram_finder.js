const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const phraseLC = this.phrase.toLowerCase();
  return this.alphabet.every(letter => phraseLC.includes(letter));
}

module.exports = PangramFinder;
