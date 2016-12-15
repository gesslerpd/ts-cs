
import { QueueNode } from './QueueNode';

/**
 * FIFO Queue
 * 
 * @export
 * @class Queue
 * @template T
 */
export class Queue<T> {

    /**
     * Queue Errors
     */
    static ERROR = {
        EMPTY: `Queue is empty`
    };

    /**
     * Number of items currently in the queue
     * 
     * @private
     * @type {number}
     * @memberOf Queue
     */
    private _length: number;

    /**
     * Front end of the queue where items are removed from
     * 
     * @private
     * @type {QueueNode<T>}
     * @memberOf Queue
     */
    private _head: QueueNode<T>;

    /**
     * Tail end of the queue where items are appended
     * 
     * @private
     * @type {QueueNode<T>}
     * @memberOf Queue
     */
    private _tail: QueueNode<T>;

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
    enqueue(data: T) {
        let node = new QueueNode(data);
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
    dequeue(): T {
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
    peek(): T {
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
    isEmpty(): boolean {
        return this._length === 0;
    }

    /**
     * The number of items in the Queue
     * 
     * @readonly
     * @type {number}
     * @memberOf Queue
     */
    get length(): number {
        return this._length;
    }
}
