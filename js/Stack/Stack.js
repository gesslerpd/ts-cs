"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StackNode_1 = require("./StackNode");
/**
 * LIFO Stack
 *
 * @export
 * @class Stack
 * @template T
 *
 * @spaceComplexity O(n)
 */
class Stack {
    constructor() {
        this._length = 0;
        this._tail = null;
    }
    /**
     * Add item to the top of the stack
     *
     * @param {T} data
     *
     * @memberOf Stack
     *
     * @timeComplexity O(1)
     * @spaceComplexity O(1)
     */
    push(data) {
        let node = new StackNode_1.StackNode(data);
        if (this.isEmpty()) {
            this._tail = node;
        }
        else {
            let temp = this._tail;
            this._tail = node;
            this._tail.prev = temp;
        }
        this._length++;
    }
    /**
     * Remove and return item from the top of the stack
     *
     * @returns {T}
     *
     * @memberOf Stack
     *
     * @timeComplexity O(1)
     * @spaceComplexity O(1)
     */
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        let temp = this._tail;
        this._tail = this._tail.prev;
        this._length--;
        return temp.data;
    }
    /**
     * Inspect the item at the top of the stack
     *
     * @returns {T}
     *
     * @memberOf Stack
     *
     * @timeComplexity O(1)
     * @spaceComplexity O(1)
     */
    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this._tail.data;
    }
    mutate(data) {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this._tail.data = data;
    }
    /**
     * Checks if the stack is empty
     *
     * @returns {boolean}
     *
     * @memberOf Stack
     *
     * @timeComplexity O(1)
     * @spaceComplexity O(1)
     */
    isEmpty() {
        return this._length === 0;
    }
    /*
    reverse(): void {
        let q = new Queue<T>();
        while (!this.isEmpty()) {
            q.enqueue(this.pop());
        }
        while (!q.isEmpty()) {
            this.push(q.dequeue());
        }
    }
    */
    /**
     * Gets the number of items currently in the stack
     *
     * @readonly
     * @type {number}
     * @memberOf Stack
     */
    get length() {
        return this._length;
    }
}
exports.Stack = Stack;
