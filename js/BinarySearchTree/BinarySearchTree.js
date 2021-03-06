"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeNode_1 = require("./BinaryTreeNode");
/**
 * Traversal method used by the BST traverse method
 *
 * @export
 * @enum {number}
 */
var Traverse;
(function (Traverse) {
    Traverse[Traverse["INORDER"] = 0] = "INORDER";
    Traverse[Traverse["PREORDER"] = 1] = "PREORDER";
    Traverse[Traverse["POSTORDER"] = 2] = "POSTORDER";
})(Traverse = exports.Traverse || (exports.Traverse = {}));
/**
 * Binary Search Tree
 *
 * @export
 * @class BinarySearchTree
 * @template T
 *
 * @spaceComplexity O(n)
 */
class BinarySearchTree {
    constructor() {
        this._root = null;
    }
    /**
     * Insert a new element into the tree
     *
     * @param {T} data
     * @returns
     *
     * @memberOf BinarySearchTree
     *
     * @timeComplexity { avg: O(log n), worst: O(n) }
     * @spaceComplexity O(1)
     */
    insert(data) {
        let node = new BinaryTreeNode_1.BinaryTreeNode(data);
        if (this._root === null) {
            this._root = node;
        }
        else {
            let cur = this._root;
            while (cur != null) {
                if (data > cur.data) {
                    if (cur.right === null) {
                        cur.right = node;
                        return;
                    }
                    cur = cur.right;
                }
                else {
                    if (cur.left === null) {
                        cur.left = node;
                        return;
                    }
                    cur = cur.left;
                }
            }
        }
    }
    /**
     * Search for an element in the tree
     *
     * @param {T} data
     * @returns {boolean}
     *
     * @memberOf BinarySearchTree
     *
     * @timeComplexity { avg: O(log n), worst: O(n) }
     * @spaceComplexity O(1)
     */
    search(data) {
        let cur = this._root;
        while (cur != null) {
            if (data === cur.data) {
                return true;
            }
            else if (data > cur.data) {
                cur = cur.right;
            }
            else {
                cur = cur.left;
            }
        }
        return false;
    }
    /**
     * Creates a sorted Array from the current tree
     *
     * @returns
     *
     * @memberOf BinarySearchTree
     */
    toArray() {
        let result = [];
        this.traverse(function (element) {
            result.push(element);
        });
        return result;
    }
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
    traverse(cb, method) {
        method = method || Traverse.INORDER;
        function inOrder(node) {
            if (node !== null) {
                if (node.left !== null) {
                    inOrder(node.left);
                }
                cb(node.data);
                if (node.right !== null) {
                    inOrder(node.right);
                }
            }
        }
        function preOrder(node) {
            if (node !== null) {
                cb(node.data);
                if (node.left !== null) {
                    preOrder(node.left);
                }
                if (node.right !== null) {
                    preOrder(node.right);
                }
            }
        }
        function postOrder(node) {
            if (node !== null) {
                if (node.left !== null) {
                    postOrder(node.left);
                }
                if (node.right !== null) {
                    postOrder(node.right);
                }
                cb(node.data);
            }
        }
        switch (method) {
            case Traverse.PREORDER:
                preOrder(this._root);
                break;
            case Traverse.INORDER:
                inOrder(this._root);
                break;
            case Traverse.POSTORDER:
                postOrder(this._root);
                break;
        }
    }
}
exports.BinarySearchTree = BinarySearchTree;
