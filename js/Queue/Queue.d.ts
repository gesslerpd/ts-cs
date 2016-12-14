/**
 * FIFO Queue
 *
 * @export
 * @class Queue
 * @template T
 */
export declare class Queue<T> {
    /**
     * Number of items currently in the queue
     *
     * @private
     * @type {number}
     * @memberOf Queue
     */
    private _length;
    /**
     * Front end of the queue where items are removed from
     *
     * @private
     * @type {QueueNode<T>}
     * @memberOf Queue
     */
    private _head;
    /**
     * Tail end of the queue where items are appended
     *
     * @private
     * @type {QueueNode<T>}
     * @memberOf Queue
     */
    private _tail;
    /**
     * Creates an instance of Queue.
     *
     *
     * @memberOf Queue
     */
    constructor();
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
    enqueue(data: T): void;
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
    dequeue(): T;
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
    peek(): T;
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
    isEmpty(): boolean;
    /**
     * The number of items in the Queue
     *
     * @readonly
     * @type {number}
     * @memberOf Queue
     */
    readonly length: number;
}
