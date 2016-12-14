"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseNode_1 = require('./BaseNode');
var BinaryNode = (function (_super) {
    __extends(BinaryNode, _super);
    function BinaryNode(data) {
        _super.call(this, data);
        this._first = this._second = null;
    }
    return BinaryNode;
}(BaseNode_1.BaseNode));
exports.BinaryNode = BinaryNode;
