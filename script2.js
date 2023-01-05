//MAGIC EIGHT BALL PROJECT
//BUILT THIS PROJECT USING CONTROL FLOW (THE ORDER IN WHICH A COMPUTER EXECUTES STATEMENTS IN A SCRIPT- FROM 1ST LINE TO THE LAST LINE OF CODE.).  BY USING JAVASCRIPT VARIABLES, CONDITIONALS AND BUILT-IN MATH FUNCTIONS. 

let magicNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch(magicNumber) {
  //in case that the random number is '0' the console will print 'It is certain'
case 0:
eightBall = ('It is certain');
break;
case 1:
eightBall = ('It is decidedly so');
break;
case 2:
eightBall = ('Reply hazy try again');
break;
case 3:
eightBall = ('Cannot predict now');
break;
case 4:
eightBall = ('Do not count on it');
break;
case 5:
eightBall = ('My sources say no');
break;
case 6:
eightBall = ('Outlook not so good');
break;
case 7:
eightBall = ('Signs point to yes');
break;
}

console.log(`The Magic Eight Ball States: ${eightBall}`)


//BUILT THIS VERSION OF THE PROJECT USING MORE COMPLEX CONDITIONALS BY ADDING "else if" TO THE "if" STATEMENTS.

let magicNumber = Math.floor(Math.random() * 8);


if (magicNumber === 0) {
  console.log('The Magic Eight Ball States: It is certain');
} else if (magicNumber === 1) {
  console.log('The Magic Eight Ball States: It is decidedly so');
} else if (magicNumber === 2) {
  console.log('The Magic Eight Ball States: Reply hazy try again');
} else if (magicNumber === 3) {
  console.log('The Magic Eight Ball States: Cannot predict now');
} else if (magicNumber === 4) {
  console.log('The Magic Eight Ball States: Do not count on it');
} else if (magicNumber === 5) {
  console.log('The Magic Eight Ball States: My sources say no');
} else if (magicNumber === 6) {
  console.log('The Magic Eight Ball States: Outlook not so good');
} else if (magicNumber === 7) {
  console.log('The Magic Eight Ball States: Signs point to yes');
}
  console.log(`${magicNumber}`);
























