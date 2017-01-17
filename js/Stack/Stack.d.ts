/**
 * LIFO Stack
 *
 * @export
 * @class Stack
 * @template T
 *
 * @spaceComplexity O(n)
 */
export declare class Stack<T> {
    private _length;
    private _tail;
    constructor();
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
    push(data: T): void;
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
    pop(): T;
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
    peek(): T;
    mutate(data: T): T;
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
    isEmpty(): boolean;
    /**
     * Gets the number of items currently in the stack
     *
     * @readonly
     * @type {number}
     * @memberOf Stack
     */
    readonly length: number;
}
