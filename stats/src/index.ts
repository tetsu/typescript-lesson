import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8'
  })
  .split('\n')
  .map(
    (row: string): string[] => {
      return row.split(',');
    }
  );

let manUnitedWins = 0;

enum MatchRecord {
  Date = 0,
  HomeTeam = 1,
  AwayTeam = 2,
  HomeScore = 3,
  AwayScore = 4,
  Winner = 5,
  RefereeName = 6
}

enum Winner {
  HomeTeam = 'H',
  AwayTeam = 'A',
  Draw = 'D'
}

for (let match of matches) {
  if (
    match[MatchRecord.HomeTeam] === 'Man United' &&
    match[MatchRecord.Winner] === Winner.HomeTeam
  ) {
    manUnitedWins++;
  } else if (
    match[MatchRecord.AwayTeam] === 'Man United' &&
    match[MatchRecord.Winner] === Winner.AwayTeam
  ) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
