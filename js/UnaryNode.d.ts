import { BaseNode } from './BaseNode';
export declare class UnaryNode<T> extends BaseNode<T> {
    protected _first: UnaryNode<T>;
    constructor(data: T);
}
