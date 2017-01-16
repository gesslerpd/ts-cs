"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Node_1 = require("../Node");
var BinaryTreeNode = (function (_super) {
    __extends(BinaryTreeNode, _super);
    function BinaryTreeNode(data) {
        return _super.call(this, data) || this;
    }
    Object.defineProperty(BinaryTreeNode.prototype, "left", {
        get: function () {
            return this._first;
        },
        set: function (node) {
            this._first = node;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BinaryTreeNode.prototype, "right", {
        get: function () {
            return this._second;
        },
        set: function (node) {
            this._second = node;
        },
        enumerable: true,
        configurable: true
    });
    return BinaryTreeNode;
}(Node_1.BinaryNode));
exports.BinaryTreeNode = BinaryTreeNode;
