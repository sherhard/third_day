console.log('Exercises: Level 1');
let firstName = 'Sher';
let lastName = 'Zhyldyzbek';
let country = 'Kyrgyzstan';
let city = 'Osh';
let age = '26';
let isMearried = true;
let years = 2023;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMearried);
console.log(typeof years);

console.log('2----------------------------------');
let tenNum = 10;
let tenStr = '10';
console.log(typeof tenNum == tenStr);
console.log(typeof tenNum === tenStr);
console.log(typeof tenNum != tenStr);
console.log(10 == '10');
console.log(10 === '10');
console.log('3----------------------------------');
console.log(typeof parseInt('9.8') == 10);
console.log(typeof parseInt('9.8', 10));
console.log('4----------------------------------');

console.log(3 > 2);
console.log(3 >= 2);
console.log(2 < 3);

console.log(3 == 2);
console.log(3 < 2);
console.log(3 === '3')

console.log('5----------------------------------');
console.log(4 > 3);//trrue
console.log(4 >= 3);//true
console.log(4 < 3);//false
console.log(4 <= 3);//false
console.log(4 == 4);//true
console.log(4 === 4);//true
console.log(4 != 4);//false
console.log(4 !== 4);//false
console.log(4 != '4');//false
console.log(4 !== '4');//true
console.log(4 == '4')//true;
console.log(4 === '4');//false
console.log('----------------------------------');

let python = 'python';
let jargon = 'jargon';


console.log(python.length == jargon.length);

console.log('6----------------------------------');

console.log(4 > 3 && 10 < 12);//trie
console.log(4 > 3 && 10 > 12);//false
console.log(4 > 3 || 10 < 12);//true
console.log(4 > 3 || 10 > 12);//false
console.log(!(4 > 3))//f
console.log(!(4 < 3));
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

console.log('7----------------------------------');

let now = new Date;
console.log(now);
let year = new Date;
console.log(year.getFullYear());
let month = new Date;
console.log(month.getMonth());
let dates = new Date;
console.log(dates.getDate());
let days = new Date;
console.log(days.getDay());
let hours = new Date;
console.log(hours.getHours());
let minuts = new Date;
console.log(minuts.getMinutes());
let secund = new Date;
console.log(secund.getSeconds())
let multise = new Date;
console.log(multise.getMilliseconds());







