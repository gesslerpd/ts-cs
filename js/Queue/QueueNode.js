"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Node_1 = require('../Node');
/**
 * Node to store data in the queue
 *
 * @class QueueNode
 * @template T
 */
var QueueNode = (function (_super) {
    __extends(QueueNode, _super);
    /**
     * Creates an instance of QueueNode given the element data
     *
     * @param {T} data
     *
     * @memberOf QueueNode
     */
    function QueueNode(data) {
        _super.call(this, data);
    }
    Object.defineProperty(QueueNode.prototype, "next", {
        /**
         * Gets the next node in the queue
         *
         * @type {QueueNode<T>}
         * @memberOf QueueNode
         */
        get: function () {
            return this._first;
        },
        /**
         * Sets the next node in the queue
         *
         *
         * @memberOf QueueNode
         */
        set: function (node) {
            this._first = node;
        },
        enumerable: true,
        configurable: true
    });
    return QueueNode;
}(Node_1.UnaryNode));
exports.QueueNode = QueueNode;
