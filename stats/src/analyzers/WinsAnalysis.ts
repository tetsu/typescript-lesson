import { MatchData, MatchRecord } from '../Match';
import { Analyzer } from '../Summary';
import { Winner } from '../Winner';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (
        match[MatchRecord.HomeTeam] === this.team &&
        match[MatchRecord.Winner] === Winner.HomeTeam
      ) {
        wins++;
      } else if (
        match[MatchRecord.AwayTeam] === this.team &&
        match[MatchRecord.Winner] === Winner.AwayTeam
      ) {
        wins++;
      }
    }
    return `${this.team} won ${wins} games.`;
  }
}
