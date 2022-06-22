'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const CsvFileReader_1 = require('./CsvFileReader');
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
// Enum - enumeration
var MatchResult;
(function (MatchResult) {
  MatchResult['HomeWin'] = 'H';
  MatchResult['AwayWin'] = 'A';
  MatchResult['Draw'] = 'D';
})(MatchResult || (MatchResult = {}));
let maUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    maUnitedWins++;
  } else if (match[2] == 'Man United' && match[5] === MatchResult.AwayWin) {
    maUnitedWins++;
  }
}
console.log(`Man United won ${maUnitedWins} games`);
