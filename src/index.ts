import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();

let maUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    maUnitedWins++;
  } else if (match[2] == 'Man United' && match[5] === MatchResult.AwayWin) {
    maUnitedWins++;
  }
}
console.log(`Man United won ${maUnitedWins} games`);
