"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Node_1 = require('../Node');
var ListNode = (function (_super) {
    __extends(ListNode, _super);
    /**
     * Creates an instance of QueueNode given the element data
     *
     * @param {T} data
     *
     * @memberOf QueueNode
     */
    function ListNode(data) {
        _super.call(this, data);
    }
    Object.defineProperty(ListNode.prototype, "next", {
        /**
         * Gets the next node in the list
         *
         * @type {QueueNode<T>}
         * @memberOf QueueNode
         */
        get: function () {
            return this._first;
        },
        /**
         * Sets the next node in the list
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
    return ListNode;
}(Node_1.UnaryNode));
exports.ListNode = ListNode;
