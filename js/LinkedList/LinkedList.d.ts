export declare type IterateFn<T> = (elem: T, index?: number) => void;
export declare class LinkedList<T> {
    static ERROR: {
        NONEXIST: string;
        NONFIND: string;
    };
    private _length;
    private _head;
    private _tail;
    constructor();
    insert(data: T): void;
    remove(index: number): T;
    removeElement(element: T): T;
    containsElement(element: T): number;
    isEmpty(): boolean;
    /**
     * Iterates through the linked list and calls the provided function
     *
     * @param {LinkedListCallback<T>} cb
     * @method forEach
     * @memberOf LinkedList
     */
    forEach(cb: IterateFn<T>): void;
    toArray(): T[];
    /**
     * Converts the linked list to a string
     * @returns {string}
     * @method toString
     * @memberOf LinkedList
     */
    toString(): string;
}
