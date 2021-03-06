"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = require("./ListNode");
class LinkedList {
    constructor() {
        this._length = 0;
        this._head = null;
        this._tail = null;
    }
    insert(data) {
        let node = new ListNode_1.ListNode(data);
        if (this.isEmpty()) {
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
            this._tail = node;
        }
        this._length++;
    }
    remove(index) {
        let data;
        if (index > this._length - 1 || index < 0) {
            throw new Error(LinkedList.ERROR.NONEXIST);
        }
        else if (index === 0) {
            data = this._head.data;
            this._head = this._head.next;
        }
        else {
            let i = 1;
            let cur = this._head;
            while (i < index) {
                cur = cur.next;
                i++;
            }
            data = cur.next.data;
            cur.next = cur.next.next;
        }
        this._length--;
        return data;
    }
    removeElement(element) {
        let index = this.containsElement(element);
        if (index === -1) {
            throw new Error(LinkedList.ERROR.NONFIND);
        }
        return this.remove(index);
    }
    containsElement(element) {
        let cur = this._head;
        let i = 0;
        while (cur != null) {
            if (cur.data === element) {
                return i;
            }
            cur = cur.next;
            i++;
        }
        return -1;
    }
    isEmpty() {
        return this._length === 0;
    }
    /**
     * Iterates through the linked list and calls the provided function
     *
     * @param {LinkedListCallback<T>} cb
     * @method forEach
     * @memberOf LinkedList
     */
    forEach(cb) {
        let cur = this._head;
        let i = 0;
        while (cur != null) {
            cb(cur.data, i);
            cur = cur.next;
            i++;
        }
    }
    toArray() {
        let arr = new Array(this._length);
        this.forEach((element, index) => {
            arr[index] = element;
        });
        return arr;
    }
    /**
     * Converts the linked list to a string
     * @returns {string}
     * @method toString
     * @memberOf LinkedList
     */
    toString() {
        return this.toArray().toString();
    }
}
LinkedList.ERROR = {
    NONEXIST: `Node doesn't exist`,
    NONFIND: `List doesn't contain that element`
};
exports.LinkedList = LinkedList;
