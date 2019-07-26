"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var dateArray = dateString.split("/").map(function (value) {
        return parseInt(value);
    });
    return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
};
