interface Summerizer {
    summary: string
}

function nameOfCar(): string {
    return `Name: ${this.name}`
}

function sugarContent(): string {
    return `This drink has ${this.sugar} grams of sugar`
}

const oldCivic =  {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary: nameOfCar()
}

const kia = {name: 'Niro', year: new Date(), broken: false, summary: nameOfCar()}
const drink = {color: 'brown', carbonated: true, sugar: 40, summary: sugarContent()}

const summerizeItem = ( item: Summerizer ): void => {
    console.log(item.summary)
}

summerizeItem(oldCivic)
summerizeItem(kia)
summerizeItem(drink)
