"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Winner_1 = require("./Winner");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchRecord;
(function (MatchRecord) {
    MatchRecord[MatchRecord["Date"] = 0] = "Date";
    MatchRecord[MatchRecord["HomeTeam"] = 1] = "HomeTeam";
    MatchRecord[MatchRecord["AwayTeam"] = 2] = "AwayTeam";
    MatchRecord[MatchRecord["HomeScore"] = 3] = "HomeScore";
    MatchRecord[MatchRecord["AwayScore"] = 4] = "AwayScore";
    MatchRecord[MatchRecord["Winner"] = 5] = "Winner";
    MatchRecord[MatchRecord["RefereeName"] = 6] = "RefereeName";
})(MatchRecord = exports.MatchRecord || (exports.MatchRecord = {}));
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.fromCsv = function (filename) {
        var csvFileReader = new CsvFileReader_1.CsvFileReader(filename);
        return new MatchReader(csvFileReader);
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    };
    MatchReader.prototype.countWins = function (team) {
        var wins = 0;
        for (var _i = 0, _a = this.matches; _i < _a.length; _i++) {
            var match = _a[_i];
            if (match[MatchRecord.HomeTeam] === team &&
                match[MatchRecord.Winner] === Winner_1.Winner.HomeTeam) {
                wins++;
            }
            else if (match[MatchRecord.AwayTeam] === team &&
                match[MatchRecord.Winner] === Winner_1.Winner.AwayTeam) {
                wins++;
            }
        }
        return wins;
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
