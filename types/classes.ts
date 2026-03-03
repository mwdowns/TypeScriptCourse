interface Printer {
    summary: string
}

class Vehicle {
    color: string
    constructor({color}: {color: string}) {
        this.color = color;
    }
    protected drive(): void {
        console.log('vroom!')
    }
    protected honk(): void {
        console.log('honk!')
    }
}

class Car extends Vehicle {
    name: string
    constructor({color, name}: {color: string, name: string}) {
        super({color: color});
        this.name = name;
    }

    public startDriving(): void {
        this.drive()
        this.honk()
    }
    summary: string
}

function printCarInfo(): string {
    return `This is the make of the car: ${this.name} and its color is ${this.color}`
}

const car = new Car({color: "red", name: "Niro"})
car.summary = printCarInfo()
car.startDriving()
console.log(car.summary)