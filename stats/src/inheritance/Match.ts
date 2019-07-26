import { CsvFileReader } from "./CsvFileReader";
import { Winner } from "./Winner";
import { dateStringToDate } from "./utils";

export enum MatchRecord {
  Date = 0,
  HomeTeam = 1,
  AwayTeam = 2,
  HomeScore = 3,
  AwayScore = 4,
  Winner = 5,
  RefereeName = 6
}

export type MatchData = [Date, string, string, number, number, Winner, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as Winner,
      row[6]
    ];
  }

  countWins(team: string): number {
    let wins = 0;

    for (let match of this.data) {
      if (
        match[MatchRecord.HomeTeam] === "Man United" &&
        match[MatchRecord.Winner] === Winner.HomeTeam
      ) {
        wins++;
      } else if (
        match[MatchRecord.AwayTeam] === "Man United" &&
        match[MatchRecord.Winner] === Winner.AwayTeam
      ) {
        wins++;
      }
    }
    return wins;
  }
}
