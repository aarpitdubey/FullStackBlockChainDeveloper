// 2. Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

// 1. 60°C is 140 °F
let Fahrenheit = (c)=>{
    f = (9 * (c/5)) + 32;
     return `${f}° F`;
}

// 2. 45°F is 7.222222222222222°C
let Celsius = (f) => {
    c = (5 * (f - 32))/9;
    return `${c}° C`
}

console.log(`60°C is ${Fahrenheit(60)}`);
console.log(`45°F is ${Celsius(45)}`);