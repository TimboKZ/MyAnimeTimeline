class Greeter {
    
    name: string;
    
    constructor(n: string) {
        this.name = n;
    }
    
    greet() {
        return "Hello " + this.name;
    }
}