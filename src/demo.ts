export interface IDemo {
    name: string;
    getName(): string;
}

export class Demo implements IDemo {
    name: string;
    constructor() {
        console.log('Demo constructor');
        console.log(arguments[0]);
        this.name = arguments[0] || 'ts demo';
    }
    getName(): string {
        console.log(this.name);
        return this.name;
    }

}