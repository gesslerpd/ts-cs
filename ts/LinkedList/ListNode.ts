
import { UnaryNode } from '../Node';

export class ListNode<T> extends UnaryNode<T> {

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
     * Gets the next node in the list
     * 
     * @type {QueueNode<T>}
     * @memberOf QueueNode
     */
    get next(): ListNode<T> {
        return this._first as ListNode<T>;
    }

    /**
     * Sets the next node in the list
     * 
     * 
     * @memberOf QueueNode
     */
    set next(node: ListNode<T>) {
        this._first = node;
    }

}