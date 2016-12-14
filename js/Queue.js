"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UnaryNode_1 = require('./UnaryNode');
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
}(UnaryNode_1.UnaryNode));
/**
 * FIFO Queue
 *
 * @export
 * @class Queue
 * @template T
 */
var Queue = (function () {
    /**
     * Creates an instance of Queue.
     *
     *
     * @memberOf Queue
     */
    function Queue() {
        this._length = 0;
        this._head = null;
        this._tail = null;
    }
    /**
     * Add item to the queue
     *
     * @param {T} data
     *
     * @memberOf Queue
     *
     * @timeComplexity O(1)
     * @spaceComplexity O(1)
     */
    Queue.prototype.enqueue = function (data) {
        var node = new QueueNode(data);
        if (this.isEmpty()) {
            this._head = this._tail = node;
        }
        else {
            this._tail.next = node;
            this._tail = this._tail.next;
        }
        this._length++;
    };
    /**
     * Remove item from the queue
     *
     * @returns {T}
     *
     * @memberOf Queue
     *
     * @timeComplexity O(1)
     * @spaceComplexity O(1)
     */
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            throw new Error("Cannot dequeue from an empty queue");
        }
        var temp = this._head;
        this._head = this._head.next;
        this._length--;
        return temp.data;
    };
    /**
     * Inspect the next item in the queue without removal
     *
     * @returns {T}
     *
     * @memberOf Queue
     *
     * @timeComplexity O(1)
     * @spaceComplexity O(1)
     */
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this._head.data;
    };
    /**
     * Check if the Queue is empty
     *
     * @returns {boolean}
     *
     * @memberOf Queue
     *
     * @timeComplexity O(1)
     * @spaceComplexity O(1)
     */
    Queue.prototype.isEmpty = function () {
        return this._length === 0;
    };
    Object.defineProperty(Queue.prototype, "length", {
        /**
         * The number of items in the Queue
         *
         * @readonly
         * @type {number}
         * @memberOf Queue
         */
        get: function () {
            return this._length;
        },
        enumerable: true,
        configurable: true
    });
    return Queue;
}());
exports.Queue = Queue;
