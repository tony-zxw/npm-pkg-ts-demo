"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo = void 0;
class Demo {
    constructor() {
        console.log('Demo constructor');
        console.log(arguments[0]);
        this.name = arguments[0] || 'ts demo';
    }
    getName() {
        console.log(this.name);
        return this.name;
    }
}
exports.Demo = Demo;
