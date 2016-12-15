
import { StackNode } from './StackNode';
import { Queue } from '../Queue';

/**
 * LIFO Stack
 * 
 * @export
 * @class Stack
 * @template T
 * 
 * @spaceComplexity O(n)
 */
export class Stack<T> {
    private _length: number;
    private _tail: StackNode<T>;

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
    push(data: T) {
        let node = new StackNode(data);
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
    pop(): T {
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
    peek(): T {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this._tail.data;
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
    isEmpty(): boolean {
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
    get length(): number {
        return this._length;
    }

}
