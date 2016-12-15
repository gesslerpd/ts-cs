import { UnaryNode } from '../Node';
export declare class ListNode<T> extends UnaryNode<T> {
    /**
     * Creates an instance of QueueNode given the element data
     *
     * @param {T} data
     *
     * @memberOf QueueNode
     */
    constructor(data: T);
    /**
     * Gets the next node in the list
     *
     * @type {QueueNode<T>}
     * @memberOf QueueNode
     */
    /**
     * Sets the next node in the list
     *
     *
     * @memberOf QueueNode
     */
    next: ListNode<T>;
}
