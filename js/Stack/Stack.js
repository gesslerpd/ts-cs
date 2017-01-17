"use strict";
var StackNode_1 = require("./StackNode");
/**
 * LIFO Stack
 *
 * @export
 * @class Stack
 * @template T
 *
 * @spaceComplexity O(n)
 */
var Stack = (function () {
    function Stack() {
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
    Stack.prototype.push = function (data) {
        var node = new StackNode_1.StackNode(data);
        if (this.isEmpty()) {
            this._tail = node;
        }
        else {
            var temp = this._tail;
            this._tail = node;
            this._tail.prev = temp;
        }
        this._length++;
    };
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
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        var temp = this._tail;
        this._tail = this._tail.prev;
        this._length--;
        return temp.data;
    };
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
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this._tail.data;
    };
    Stack.prototype.mutate = function (data) {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this._tail.data = data;
    };
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
    Stack.prototype.isEmpty = function () {
        return this._length === 0;
    };
    Object.defineProperty(Stack.prototype, "length", {
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
        get: function () {
            return this._length;
        },
        enumerable: true,
        configurable: true
    });
    return Stack;
}());
exports.Stack = Stack;
