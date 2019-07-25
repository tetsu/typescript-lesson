"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringCollection = /** @class */ (function () {
    function StringCollection(data) {
        this.data = data;
    }
    StringCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    StringCollection.prototype.swap = function (leftIndex, rightIndex) {
        if (this.compare(leftIndex, rightIndex)) {
            var temp = this.data[leftIndex];
            this.data[leftIndex] = this.data[rightIndex];
            this.data[rightIndex] = temp;
        }
    };
    Object.defineProperty(StringCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return StringCollection;
}());
exports.StringCollection = StringCollection;
