/**
 * Traversal method used by the BST traverse method
 *
 * @export
 * @enum {number}
 */
export declare enum Traverse {
    INORDER = 0,
    PREORDER = 1,
    POSTORDER = 2,
}
/**
 * Callback used by the tree traversal
 * TODO: Add index param
 */
export declare type Callback<T> = (elem: T) => void;
/**
 * Binary Search Tree
 *
 * @export
 * @class BinarySearchTree
 * @template T
 *
 * @spaceComplexity O(n)
 */
export declare class BinarySearchTree<T> {
    /**
     * Root node of the tree
     *
     * @private
     * @type {BinaryNode<T>}
     * @memberOf BinarySearchTree
     */
    private _root;
    constructor();
    /**
     * Insert a new element into the tree
     *
     * @param {T} data
     * @returns
     *
     * @memberOf BinarySearchTree
     *
     * @timeComplexity O(log n)
     * @spaceComplexity O(1)
     */
    insert(data: T): void;
    /**
     * Search for an element in the tree
     *
     * @param {T} data
     * @returns {boolean}
     *
     * @memberOf BinarySearchTree
     *
     * @timeComplexity O(log n)
     * @spaceComplexity O(1)
     */
    search(data: T): boolean;
    /**
     * Creates a sorted Array from the current tree
     *
     * @returns
     *
     * @memberOf BinarySearchTree
     */
    toArray(): T[];
    /**
     * Traverse through items in the tree
     *
     * @param {Callback<T>} cb
     * @param {Traverse} [method]
     *
     * @memberOf BinarySearchTree
     *
     * @timeComplexity O(n)
     */
    traverse(cb: Callback<T>, method?: Traverse): void;
}
