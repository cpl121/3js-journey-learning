import Robot from "./Robot";

class FlyingRobot extends Robot {
    constructor(name, legs) {
        super(name, legs)
        this.canFly = true
    }
    sayHi() {
        super.sayHi()
        console.log("I am a flying robot");
    }
    takeOff() {
        console.log("Have a good flight", this.name);
    }
    land() {
        console.log("Welcome back", this.name);
    }
}

export default FlyingRobot