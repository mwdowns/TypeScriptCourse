const today = new Date();
today.getDate();

const person = {
    age: 20
}
console.log(person.age)

class Color {
    name: string
}

const red = new Color()
red.name = "red"

let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();
let tomorrow: Date;
let colors: string[] = ["red", "blue", "green"];
class Car {

}
let car: Car = new Car()
let point: { x: number; y: number} = {
    x: 10,
    y: 20
}
point.x = 50
// function Name colon annotation of function equal function implementation
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}
logNumber(5)

// When to use annotations
// 1. functions that use "any" type
const json = '{"x": 10, "y": 10}'
// change the return type of coords from "any", which is returned by JSON.parse(),
// to a defined type. in this case an object literal
const coords: {x: number, y: number} = JSON.parse(json);
console.log(coords)
// 2. delayed initialization
let words = ["red", "green", "blue"]
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] == "green") {
        foundWord = true
    }
}
// 3. when inference doesn't work (the below is bad code)
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++ ) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}