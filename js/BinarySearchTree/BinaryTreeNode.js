"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Node");
class BinaryTreeNode extends Node_1.BinaryNode {
    constructor(data) {
        super(data);
    }
    get left() {
        return this._first;
    }
    set left(node) {
        this._first = node;
    }
    get right() {
        return this._second;
    }
    set right(node) {
        this._second = node;
    }
}
exports.BinaryTreeNode = BinaryTreeNode;
