export interface IDemo {
    name: string;
    getName(): string;
}
declare class Demo implements IDemo {
    name: string;
    constructor();
    getName(): string;
}
export { Demo };
