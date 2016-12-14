import { BaseNode } from './BaseNode';
export declare class BinaryNode<T> extends BaseNode<T> {
    protected _first: BinaryNode<T>;
    protected _second: BinaryNode<T>;
    constructor(data: T);
}
