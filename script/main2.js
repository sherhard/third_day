console.log('1------------------------');
let a = +prompt('Введите основание:');

let h = parseInt(prompt('высота'))
console.log('S=' + 0.5 * a * h)


console.log('2------------------------');
let A = parseInt(prompt('сторона:'));
let B = parseInt(prompt(' сторона:'));
let C = parseInt(prompt('сторона:'));
let result = A + B + C;

console.log(result);

console.log('3-------------------------');

let leng = parseInt(prompt('длина'));
let width = parseInt(prompt('ширина'));
let rectangle = leng * width;
console.log(rectangle)
let perimetr = (leng + width) * 2;
console.log(perimetr);


console.log('4----------------------------');

let Pi = 3.14;
let r = parseInt(prompt('введите радиус'));
let Scircle = Pi * r * r;
console.log(Scircle)
let Circircle = 2 * Pi * r;
console.log(Circircle);
console.log('5----------------------------');
let x = parseInt(prompt('x пересечение'));
let y = 2 ** x - 2;
console.log(y)
console.log('6----------------------------');
let y1 = 2;
let y2 = 2;
let x1 = 6;
let x2 = 10;
let m = y1 * 2 - y2 * 1 / x1 * 2 - x2 * 1;
console.log(m);
console.log('7----------------------------');
console.log(y1 ** 2 - y2 * 1 === x1 * 2 - x2 * 1);
console.log('8------------------------------');
console.log(' (y = x ^ 2 + 6x + 9).')

console.log('9------------------------------');

let hors = parseInt(prompt('введите часы:'));
let work = parseInt(prompt('введите часы работы'));
let earnings = hors * work;
console.log(earnings);
console.log('10------------------------------');

let yourName = prompt('Ваше имя');
let shortName = yourName.length < 7;
console.log(shortName);

console.log('11------------------------------');
let firstNames = 'sher';
let lastNames = 'Zhyldyzbek';
let resultName = firstNames.length == lastNames.length;
console.log(resultName);
console.log(`Твоё имя, ${firstNames} длиннее твоей фамилии, ${lastNames}`);

console.log('12------------------------------');

let myAge = 250;
let yourAge = 25;
console.log(`Я на ${myAge} лет старше тебя.`);


console.log('13------------------------------');

let yearOfbirth = prompt('введите год рождение');
let newYear = 2023;
let pop = (newYear - yearOfbirth) > 18;

alert(pop + ' ' + 'вам можно водить');



console.log('15------------------------------');
let noow = new Date;
console.log(noow.getFullYear() + '-' + noow.getHours() + '-' + noow.getDay() + '-' + noow.getHours() + '-' + noow.getMilliseconds());
console.log(noow.getDay() + '-' + noow.getMonth() + '-' + noow.getFullYear() + '-' + noow.getHours() + '-' + noow.getMilliseconds());
console.log(noow.getDay() + '/' + noow.getMonth() + '/' + noow.getFullYear() + '/' + noow.getHours() + '/' + noow.getMilliseconds());







