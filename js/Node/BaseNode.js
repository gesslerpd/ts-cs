"use strict";
var BaseNode = (function () {
    function BaseNode(data) {
        this._data = data;
    }
    Object.defineProperty(BaseNode.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    return BaseNode;
}());
exports.BaseNode = BaseNode;
