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

























