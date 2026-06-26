// your JS code here

Object.defineProperty(Object.prototype, "getKeys", {
    value: function () {
        return Object.keys(this);
    },
    enumerable: false
});