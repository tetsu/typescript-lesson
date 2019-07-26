"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Match_1 = require("../Match");
var Winner_1 = require("../Winner");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[Match_1.MatchRecord.HomeTeam] === this.team &&
                match[Match_1.MatchRecord.Winner] === Winner_1.Winner.HomeTeam) {
                wins++;
            }
            else if (match[Match_1.MatchRecord.AwayTeam] === this.team &&
                match[Match_1.MatchRecord.Winner] === Winner_1.Winner.AwayTeam) {
                wins++;
            }
        }
        return this.team + " won " + wins + " games.";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
