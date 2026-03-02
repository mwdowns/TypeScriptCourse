// arrays
const carMakers = ["ford", "toyota", "kia"]
const dates = [new Date(), new Date(), new Date()]
const carsByMake = [
    ["fiesta"],
    ["prius"],
    ["niro"]
]

const car = carMakers[0]
const myCar = carMakers.pop()
carMakers.map((car: string): string => {
    return "this is a type of car -> " + car;
})

const importantDates: (Date | string)[] = []
importantDates.push("2026-03-02")
importantDates.push(new Date())

// tuples
const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
}

type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', false, 40]