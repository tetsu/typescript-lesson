import { MatchReader } from "./Match";

let reader = new MatchReader("football.csv");
reader.read();

console.log(`Man United won ${reader.countWins("Man United")} games.`);
