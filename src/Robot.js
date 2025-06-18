class Robot {
    constructor(name, legs) {
        this.name = name
        this.legs = legs

        console.log("my name is", name);
    }
    sayHi() {
        console.log("Hi! my name is", this.name);
    }
}

export default Robot