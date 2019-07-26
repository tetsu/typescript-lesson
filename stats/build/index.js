"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map(function (row) {
    return row.split(',');
});
var manUnitedWins = 0;
var MatchRecord;
(function (MatchRecord) {
    MatchRecord[MatchRecord["Date"] = 0] = "Date";
    MatchRecord[MatchRecord["HomeTeam"] = 1] = "HomeTeam";
    MatchRecord[MatchRecord["AwayTeam"] = 2] = "AwayTeam";
    MatchRecord[MatchRecord["HomeScore"] = 3] = "HomeScore";
    MatchRecord[MatchRecord["AwayScore"] = 4] = "AwayScore";
    MatchRecord[MatchRecord["Winner"] = 5] = "Winner";
    MatchRecord[MatchRecord["RefereeName"] = 6] = "RefereeName";
})(MatchRecord || (MatchRecord = {}));
var Winner;
(function (Winner) {
    Winner["HomeTeam"] = "H";
    Winner["AwayTeam"] = "A";
    Winner["Draw"] = "D";
})(Winner || (Winner = {}));
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[MatchRecord.HomeTeam] === 'Man United' &&
        match[MatchRecord.Winner] === Winner.HomeTeam) {
        manUnitedWins++;
    }
    else if (match[MatchRecord.AwayTeam] === 'Man United' &&
        match[MatchRecord.Winner] === Winner.AwayTeam) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games.");
