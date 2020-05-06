let userName= 'Tina';
userName ? console.log(`Hello ${userName}!`) :
console.log('Hello') ;
const userQuestion= 'Magic Eight Ball';
console.log(`The user asked ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8);
let eightBall='';
switch(randomNumber) {
  case 0:
eightBall = 'It is decidedly so';
  case 1:
  eightBall = 'Reply hazy try again';
  break;
  case 2:
  eightBall = 'Do not count on it';
  break;
  case 3:
  eightBall = 'My sources say no';
  break;
  case 4:
  eightBall = 'Outlook not so good';
  break;
  case 5:
  eightBall = 'Signs point to yes';
break;
case 6:
  eightBall = 'It is certain';
break;
}
console.log(`The Eight Ball answered ${eightBall}`);
