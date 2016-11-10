export class BinaryNode<T> {
    public data: T;
    private _left: BinaryNode<T>;
    private _right: BinaryNode<T>;

    constructor(data: T) {
        this.data = data;
        this._left = this._right = null;
    }

    get left(): BinaryNode<T> {
        return this._left;
    }

    set left(node: BinaryNode<T>) {
        this._left = node;
    }


    get right(): BinaryNode<T> {
        return this._right;
    }

    set right(node: BinaryNode<T>) {
        this._right = node;
    }
}
