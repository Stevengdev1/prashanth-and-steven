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

//******************************************************************************* */

//HOW TO CONVERT YOUR AGE FROM "HUMAN YEARS" TO "DOG YEARS" PROJECT.

//This is my current age.
const myAge = 20;
//This variable consists of the first 2 years of a dog’s life. 
let earlyYears = 2;
//The first 2 years count as 10.5 human years each.
earlyYears *= 10.5;
//Subtracting 2 years from myAge
let laterYears = myAge - 2;
//Each year follorwing after that equates to 4 dog years.
laterYears *= 4;
console.log(earlyYears)
console.log(laterYears)
//This calculation will display my age in dog years.
const myAgeInDogYears = earlyYears + laterYears;
//this built-in method will display myName in lower case. 
const myName = 'Steven Garcia'.toLowerCase();
console.log(`My name is ${myName}.  I'm ${myAgeInDogYears} years old in dog years.`);

//******************************************************************************* */

