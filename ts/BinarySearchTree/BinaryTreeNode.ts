
import { BinaryNode } from '../Node';

export class BinaryTreeNode<T> extends BinaryNode<T> {

    constructor(data: T) {
        super(data);
    }

    get left(): BinaryTreeNode<T> {
        return this._first as BinaryTreeNode<T>;
    }

    set left(node: BinaryTreeNode<T>) {
        this._first = node;
    }


    get right(): BinaryTreeNode<T> {
        return this._second as BinaryTreeNode<T>;
    }

    set right(node: BinaryTreeNode<T>) {
        this._second = node;
    }

}
