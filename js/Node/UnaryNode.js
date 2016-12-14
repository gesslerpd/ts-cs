"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseNode_1 = require('./BaseNode');
var UnaryNode = (function (_super) {
    __extends(UnaryNode, _super);
    function UnaryNode(data) {
        _super.call(this, data);
    }
    return UnaryNode;
}(BaseNode_1.BaseNode));
exports.UnaryNode = UnaryNode;
