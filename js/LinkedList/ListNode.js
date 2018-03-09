"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Node");
class ListNode extends Node_1.UnaryNode {
    /**
     * Creates an instance of QueueNode given the element data
     *
     * @param {T} data
     *
     * @memberOf QueueNode
     */
    constructor(data) {
        super(data);
    }
    /**
     * Gets the next node in the list
     *
     * @type {QueueNode<T>}
     * @memberOf QueueNode
     */
    get next() {
        return this._first;
    }
    /**
     * Sets the next node in the list
     *
     *
     * @memberOf QueueNode
     */
    set next(node) {
        this._first = node;
    }
}
exports.ListNode = ListNode;
