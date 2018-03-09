"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Node");
/**
 * Node to store data in the queue
 *
 * @class QueueNode
 * @template T
 */
class QueueNode extends Node_1.UnaryNode {
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
     * Gets the next node in the queue
     *
     * @type {QueueNode<T>}
     * @memberOf QueueNode
     */
    get next() {
        return this._first;
    }
    /**
     * Sets the next node in the queue
     *
     *
     * @memberOf QueueNode
     */
    set next(node) {
        this._first = node;
    }
}
exports.QueueNode = QueueNode;
