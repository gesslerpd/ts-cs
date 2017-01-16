"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Node_1 = require("../Node");
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
        return _super.call(this, data) || this;
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
}(Node_1.UnaryNode));
exports.StackNode = StackNode;
