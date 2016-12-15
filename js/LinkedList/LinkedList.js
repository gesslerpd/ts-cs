"use strict";
var ListNode_1 = require('./ListNode');
var LinkedList = (function () {
    function LinkedList() {
        this._length = 0;
        this._head = null;
        this._tail = null;
    }
    LinkedList.prototype.insert = function (data) {
        var node = new ListNode_1.ListNode(data);
        if (this.isEmpty()) {
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
            this._tail = node;
        }
        this._length++;
    };
    LinkedList.prototype.remove = function (index) {
        var data;
        if (index > this._length - 1 || index < 0) {
            throw new Error(LinkedList.ERROR.NONEXIST);
        }
        else if (index === 0) {
            data = this._head.data;
            this._head = this._head.next;
        }
        else {
            var i = 1;
            var cur = this._head;
            while (i < index) {
                cur = cur.next;
                i++;
            }
            data = cur.next.data;
            cur.next = cur.next.next;
        }
        this._length--;
        return data;
    };
    LinkedList.prototype.removeElement = function (element) {
        var index = this.containsElement(element);
        if (index === -1) {
            throw new Error(LinkedList.ERROR.NONFIND);
        }
        return this.remove(index);
    };
    LinkedList.prototype.containsElement = function (element) {
        var cur = this._head;
        var i = 0;
        while (cur != null) {
            if (cur.data === element) {
                return i;
            }
            cur = cur.next;
            i++;
        }
        return -1;
    };
    LinkedList.prototype.isEmpty = function () {
        return this._length === 0;
    };
    /**
     * Iterates through the linked list and calls the provided function
     *
     * @param {LinkedListCallback<T>} cb
     * @method forEach
     * @memberOf LinkedList
     */
    LinkedList.prototype.forEach = function (cb) {
        var cur = this._head;
        var i = 0;
        while (cur != null) {
            cb(cur.data, i);
            cur = cur.next;
            i++;
        }
    };
    LinkedList.prototype.toArray = function () {
        var arr = new Array(this._length);
        this.forEach(function (element, index) {
            arr[index] = element;
        });
        return arr;
    };
    /**
     * Converts the linked list to a string
     * @returns {string}
     * @method toString
     * @memberOf LinkedList
     */
    LinkedList.prototype.toString = function () {
        return this.toArray().toString();
    };
    LinkedList.ERROR = {
        NONEXIST: "Node doesn't exist",
        NONFIND: "List doesn't contain that element"
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
