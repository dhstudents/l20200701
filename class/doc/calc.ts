export class Calc {
    private n1 : number;
    private n2 : number;
    constructor() {
        this.n1 = 0;
        this.n2 = 0;
     }

    Add() {
        return this.n1 + this.n2;
    }
    Sub() {
        return this.n1 - this.n2;
    }
    Mul() {
        return this.n1 * this.n2;
    }
    Div() {
        return this.n1 / this.n2;
    }

    SetData(n1 : number , n2 : number) : void {
        this.n1 = n1;
        this.n2 = n2;
    }
}