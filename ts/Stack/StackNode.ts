
import { UnaryNode } from '../Node';

/**
 * Node to store data in the stack
 * 
 * @class StackNode
 * @template T
 */
export class StackNode<T> extends UnaryNode<T> {


    /**
     * Creates an instance of StackNode.
     * 
     * @param {T} data
     * 
     * @memberOf StackNode
     */
    constructor(data: T) {
        super(data);
    }

    /**
     * Gets the previous node in the stack
     * 
     * @type {StackNode<T>}
     * @memberOf StackNode
     */
    get prev(): StackNode<T> {
        return this._first as StackNode<T>;
    }

    /**
     * Sets the previous node in the stack
     * 
     * @memberOf StackNode
     */
    set prev(node: StackNode<T>) {
        this._first = node;
    }

}
