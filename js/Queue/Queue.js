"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QueueNode_1 = require("./QueueNode");
/**
 * FIFO Queue
 *
 * @export
 * @class Queue
 * @template T
 */
class Queue {
    /**
     * Creates an instance of Queue.
     *
     *
     * @memberOf Queue
     */
    constructor() {
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
    enqueue(data) {
        let node = new QueueNode_1.QueueNode(data);
        if (this.isEmpty()) {
            this._head = this._tail = node;
        }
        else {
            this._tail.next = node;
            this._tail = this._tail.next;
        }
        this._length++;
    }
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
    dequeue() {
        if (this.isEmpty()) {
            throw new Error(Queue.ERROR.EMPTY);
        }
        let temp = this._head;
        this._head = this._head.next;
        this._length--;
        return temp.data;
    }
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
    peek() {
        if (this.isEmpty()) {
            throw new Error(Queue.ERROR.EMPTY);
        }
        return this._head.data;
    }
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
    isEmpty() {
        return this._length === 0;
    }
    /**
     * The number of items in the Queue
     *
     * @readonly
     * @type {number}
     * @memberOf Queue
     */
    get length() {
        return this._length;
    }
}
/**
 * Queue Errors
 */
Queue.ERROR = {
    EMPTY: `Queue is empty`
};
exports.Queue = Queue;
