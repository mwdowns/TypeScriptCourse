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

function printCarInfo(car: Car): string {
    return `This is the make of the car: ${car.name} and its color is ${car.color}`
}

const car = new Car({color: "red", name: "Niro"})
car.summary = printCarInfo(car)
car.startDriving()
console.log(car.summary)