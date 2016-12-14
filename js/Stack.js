"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UnaryNode_1 = require('./UnaryNode');
/**
 * Node to store data in the stack
 *
 * @class StackNode
 * @template T
 */
var StackNode = (function (_super) {
    __extends(StackNode, _super);
    /**
     * Creates an instance of StackNode.
     *
     * @param {T} data
     *
     * @memberOf StackNode
     */
    function StackNode(data) {
        _super.call(this, data);
    }
    Object.defineProperty(StackNode.prototype, "prev", {
        /**
         * Gets the previous node in the stack
         *
         * @type {StackNode<T>}
         * @memberOf StackNode
         */
        get: function () {
            return this._first;
        },
        /**
         * Sets the previous node in the stack
         *
         * @memberOf StackNode
         */
        set: function (node) {
            this._first = node;
        },
        enumerable: true,
        configurable: true
    });
    return StackNode;
}(UnaryNode_1.UnaryNode));
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
        var node = new StackNode(data);
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
