"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Match_1 = require("./Match");
var reader = new Match_1.MatchReader("football.csv");
reader.read();
console.log("Man United won " + reader.countWins("Man United") + " games.");
