"use strict";
var BinaryNode = (function () {
    function BinaryNode(data) {
        this.data = data;
        this._left = this._right = null;
    }
    Object.defineProperty(BinaryNode.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (node) {
            this._left = node;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BinaryNode.prototype, "right", {
        get: function () {
            return this._right;
        },
        set: function (node) {
            this._right = node;
        },
        enumerable: true,
        configurable: true
    });
    return BinaryNode;
}());
exports.BinaryNode = BinaryNode;
