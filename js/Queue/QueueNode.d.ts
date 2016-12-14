import { UnaryNode } from '../Node';
/**
 * Node to store data in the queue
 *
 * @class QueueNode
 * @template T
 */
export declare class QueueNode<T> extends UnaryNode<T> {
    /**
     * Creates an instance of QueueNode given the element data
     *
     * @param {T} data
     *
     * @memberOf QueueNode
     */
    constructor(data: T);
    /**
     * Gets the next node in the queue
     *
     * @type {QueueNode<T>}
     * @memberOf QueueNode
     */
    /**
     * Sets the next node in the queue
     *
     *
     * @memberOf QueueNode
     */
    next: QueueNode<T>;
}
