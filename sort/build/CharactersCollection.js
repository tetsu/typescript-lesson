"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        if (this.data[leftIndex].toLocaleLowerCase() ===
            this.data[rightIndex].toLocaleLowerCase()) {
            return this.data[leftIndex] < this.data[rightIndex];
        }
        return (this.data[leftIndex].toLocaleLowerCase() >
            this.data[rightIndex].toLocaleLowerCase());
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.data.split('');
        var temp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;
        this.data = characters.join('');
    };
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
