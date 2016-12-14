import { BinaryNode } from './BinaryNode';
export declare class BinaryTreeNode<T> extends BinaryNode<T> {
    constructor(data: T);
    left: BinaryTreeNode<T>;
    right: BinaryTreeNode<T>;
}
