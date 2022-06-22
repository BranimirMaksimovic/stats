import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

// Enum - enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let maUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    maUnitedWins++;
  } else if (match[2] == 'Man United' && match[5] === MatchResult.AwayWin) {
    maUnitedWins++;
  }
}
console.log(`Man United won ${maUnitedWins} games`);
