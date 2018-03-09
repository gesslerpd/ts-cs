"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Node");
/**
 * Node to store data in the stack
 *
 * @class StackNode
 * @template T
 */
class StackNode extends Node_1.UnaryNode {
    /**
     * Creates an instance of StackNode.
     *
     * @param {T} data
     *
     * @memberOf StackNode
     */
    constructor(data) {
        super(data);
    }
    /**
     * Gets the previous node in the stack
     *
     * @type {StackNode<T>}
     * @memberOf StackNode
     */
    get prev() {
        return this._first;
    }
    /**
     * Sets the previous node in the stack
     *
     * @memberOf StackNode
     */
    set prev(node) {
        this._first = node;
    }
}
exports.StackNode = StackNode;
