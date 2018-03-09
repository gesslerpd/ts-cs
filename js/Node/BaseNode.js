"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseNode {
    constructor(data) {
        this._data = data;
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
}
exports.BaseNode = BaseNode;
