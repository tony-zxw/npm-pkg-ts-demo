"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Demo = /** @class */ (function () {
    function Demo() {
        console.log('Demo constructor');
        console.log(arguments[0]);
        this.name = arguments[0] || 'ts demo';
    }
    Demo.prototype.getName = function () {
        console.log(this.name);
        return this.name;
    };
    return Demo;
}());
exports.Demo = Demo;
