//CONVERTING KELVIN INTO FARENHEIT PROJECT//

//Forecast is 293 kelvin
const kelvin = 255.5;
//We convert kelvin to celsius by subtracting 273 from kelvin 
const celsius = kelvin - 273;
//This is how we convert celsius to fahrenheit.
let fahrenheit = celsius *(9/5) + 32;
//We want to convert the decimal value to a whole number by using this formula
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is + ${fahrenheit} degrees Fahrenheit.`)

//******************************************************************************* */

//CONVERTING CELSIUS INTO NEWTON PROJECT//
//Forecast is 0 kelvin
const kelvin = 0;
//We convert kelvin to celsius by subtracting 273 from kelvin 
const celsius = kelvin - 273;
//This is how we convert celsius to Newton.
let newton = celsius * (33/100);
//We want to convert the decimal value to a whole number by using this formula
newton = Math.floor(newton);
console.log(`The temperature is + ${newton} degrees Newton.`)