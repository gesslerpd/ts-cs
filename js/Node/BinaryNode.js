"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseNode_1 = require("./BaseNode");
class BinaryNode extends BaseNode_1.BaseNode {
    constructor(data) {
        super(data);
        this._first = this._second = null;
    }
}
exports.BinaryNode = BinaryNode;
