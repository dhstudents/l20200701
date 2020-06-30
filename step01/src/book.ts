export default class Book {
    public name : string
    constructor() {
        this.name = "Danny Potter"
    }

    public get Name() {
        return this.name;
    }
};