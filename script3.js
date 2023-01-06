//HALF MARATHON PROJECT

//THIS PROGRAM REGISTERS RUNNERS FOR A MARATHON RACE AND ASSIGNS THEM A RANDOM RACE NUMBER.  IT VERIFIES THE AGE AND THEIR ARRIVAL TIME IN ORDER TO ALLOCATE THEM IN ONE OF THE THREE RACES.

//THIS VARIABLE ASSIGNS A RANDOM NUMBER FROM 0 TO 1000.
let raceNumber = Math.floor(Math.random() * 1000);
//THIS VARIABLE CHECKS IF THEY REGISTERED EARLY OR NOT.
let earlyRegistered = true;
//THIS VARIABLE CHECKS IF THEY ARE YOUTHS OR ADULTS 
let runnersAge = 18;

if(earlyRegistered && runnersAge > 18) {
  raceNumber += 1000;
}
if(runnersAge > 18 && earlyRegistered) {
  console.log(`The race will start at 9:30am and your number will be ${raceNumber}`);
} else if (!earlyRegistered && runnersAge >= 18) {
  console.log(`The race will start at 11:00am and your number will be ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`The race will start at 12:30pm and your number will be ${raceNumber}`);
} else {
  console.log(`Please see the registration desk.`); //THIS else STATEMENT WILL PRINTS THE FOLLOWING IF THEY ARE EXACTLY 18 YEARS OLD
} 