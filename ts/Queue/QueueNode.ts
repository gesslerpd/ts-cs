
import { UnaryNode } from '../Node';

/**
 * Node to store data in the queue
 * 
 * @class QueueNode
 * @template T
 */
export class QueueNode<T> extends UnaryNode<T> {

    /**
     * Creates an instance of QueueNode given the element data
     * 
     * @param {T} data
     * 
     * @memberOf QueueNode
     */
    constructor(data: T) {
        super(data);
    }

    /**
     * Gets the next node in the queue
     * 
     * @type {QueueNode<T>}
     * @memberOf QueueNode
     */
    get next(): QueueNode<T> {
        return this._first as QueueNode<T>;
    }

    /**
     * Sets the next node in the queue
     * 
     * 
     * @memberOf QueueNode
     */
    set next(node: QueueNode<T>) {
        this._first = node;
    }

}
