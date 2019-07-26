import { dateStringToDate } from './utils';
import { Winner } from './Winner';
import { CsvFileReader } from './CsvFileReader';

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

export interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    const csvFileReader = new CsvFileReader(filename);
    return new MatchReader(csvFileReader);
  }

  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
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
    );
  }

  countWins(team: string): number {
    let wins = 0;

    for (let match of this.matches) {
      if (
        match[MatchRecord.HomeTeam] === team &&
        match[MatchRecord.Winner] === Winner.HomeTeam
      ) {
        wins++;
      } else if (
        match[MatchRecord.AwayTeam] === team &&
        match[MatchRecord.Winner] === Winner.AwayTeam
      ) {
        wins++;
      }
    }
    return wins;
  }
}
