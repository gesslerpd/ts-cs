
import { BaseNode } from './BaseNode';

export class UnaryNode<T> extends BaseNode<T> {

    protected _first: UnaryNode<T>;

    constructor(data: T) {
        super(data);
    }

}
