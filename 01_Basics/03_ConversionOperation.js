let score = "33abc";

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

console.log(valueInNumber); // NAN Not a number and type of NAN is number

// null will be converted to 0 and undefined will converted to NAN

/*

"33" => 33
"33abc" => NAN

true => 1
false => 0



*/

let isLoggedIn = 1;

let booleanIsloggedIn = Boolean(isLoggedIn);

console.log(booleanIsloggedIn);

isLoggedIn = "";

booleanIsloggedIn = Boolean(isLoggedIn);

console.log(booleanIsloggedIn);

isLoggedIn = "Sachin";

booleanIsloggedIn = Boolean(isLoggedIn);

console.log(booleanIsloggedIn);

/*

1 => true 

0 => false

"" => false

"Sachin" => true

*/

let someNumber = 33;

let stringNumber = String(someNumber);

console.log(typeof stringNumber);

// **************** Operations **************

let value = 3;

let negValue = -value;

console.log(value);

console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

let str1 = "Hello";
let str2 = "Sachin";

let str3 = str1 + str2;

console.log("1" + 2);
console.log(1 + "2");

console.log("1" + 2 + 2);

console.log(1 + 2 + "2");

console.log(+true);
// console.log(true+); not possible
console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;



let gameCounter=100;
gameCounter++;

console.log(gameCounter);




