// anon function as variable using arrow syntax
const add = (a: number, b: number): number => {
    return a + b;
}

console.log(add(1, 2))

// named function
function subtract(a: number, b: number): number {
    return a - b;
}

// anon function as variable using function syntax
const multiply = function(a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message)
}

const throwError = (message: string): never => {
    throw new Error(message)
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

// destructuring inputs
// const logWeather = (forecast: {date: Date, weather: string}): void => {
const logWeather = ({
                        date,
                        weather
}: {
    date: Date,
    weather: string
}): void => {
    // console.log(forecast.date)
    // console.log(forecast.weather)
    console.log(date)
    console.log(weather)
}

logWeather(todaysWeather)