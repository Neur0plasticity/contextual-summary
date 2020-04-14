"use strict";
exports.__esModule = true;
exports.main = function (o) {
    // o.data           // can be a list or string
    // o.collections    // a list of information used to score against the input data
    if (!o) {
        throw new Error();
    }
    if (!o.data) {
        throw new Error();
    }
    if (!o.collection) {
        throw new Error();
    }
    var c = {};
    Object.keys(o.collection).forEach(function (e) { c[e] = 0; });
    o.data.forEach(function (e) {
        for (var k in o.collection) {
            c[k] += o.collection[k].includes(e);
        }
    });
    return c;
};
