
import { BaseNode } from './BaseNode';

export class BinaryNode<T> extends BaseNode<T> {

    protected _first: BinaryNode<T>;
    protected _second: BinaryNode<T>;

    constructor(data: T) {
        super(data);
        this._first = this._second = null;
    }

}
