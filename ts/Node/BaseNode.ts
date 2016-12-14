
export abstract class BaseNode<T> {

    private _data: T;

    constructor(data: T) {
        this._data = data;
    }

    get data(): T {
        return this._data;
    }

    set data(data: T) {
        this._data = data;
    }

}
