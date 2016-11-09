
/**
 * Node to store data in the stack
 * 
 * @class StackNode
 * @template T
 */
class StackNode<T> {
    /**
     * Stores the data linked to the node
     * 
     * @type {T}
     * @memberOf StackNode
     */
    public data: T;

    /**
     * Next node in the stack
     * 
     * @private
     * @type {StackNode<T>}
     * @memberOf StackNode
     */
    private _prev: StackNode<T>;

    /**
     * Creates an instance of StackNode.
     * 
     * @param {T} data
     * 
     * @memberOf StackNode
     */
    constructor(data: T) {
        this.data = data;
        this._prev = null;
    }

    /**
     * Gets the previous node in the stack
     * 
     * @type {StackNode<T>}
     * @memberOf StackNode
     */
    get prev(): StackNode<T> {
        return this._prev;
    }

    /**
     * Sets the previous node in the stack
     * 
     * @memberOf StackNode
     */
    set prev(node: StackNode<T>) {
        this._prev = node;
    }

}

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
