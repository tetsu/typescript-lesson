"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var Winner_1 = require("./Winner");
var utils_1 = require("./utils");
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
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchReader.prototype.mapRow = function (row) {
        return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    };
    MatchReader.prototype.countWins = function (team) {
        var wins = 0;
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var match = _a[_i];
            if (match[MatchRecord.HomeTeam] === "Man United" &&
                match[MatchRecord.Winner] === Winner_1.Winner.HomeTeam) {
                wins++;
            }
            else if (match[MatchRecord.AwayTeam] === "Man United" &&
                match[MatchRecord.Winner] === Winner_1.Winner.AwayTeam) {
                wins++;
            }
        }
        return wins;
    };
    return MatchReader;
}(CsvFileReader_1.CsvFileReader));
exports.MatchReader = MatchReader;
