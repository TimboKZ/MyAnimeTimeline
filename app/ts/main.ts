class Greeter {

    private name: string;

    constructor(n: string) {
        this.name = n;
    }

    public greet() {
        return 'Hello ' + this.name;
    }
}
