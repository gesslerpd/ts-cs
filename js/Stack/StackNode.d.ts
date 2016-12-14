import { UnaryNode } from '../Node';
/**
 * Node to store data in the stack
 *
 * @class StackNode
 * @template T
 */
export declare class StackNode<T> extends UnaryNode<T> {
    /**
     * Creates an instance of StackNode.
     *
     * @param {T} data
     *
     * @memberOf StackNode
     */
    constructor(data: T);
    /**
     * Gets the previous node in the stack
     *
     * @type {StackNode<T>}
     * @memberOf StackNode
     */
    /**
     * Sets the previous node in the stack
     *
     * @memberOf StackNode
     */
    prev: StackNode<T>;
}
