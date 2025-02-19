// function helloWorld(personName: string, age: number) {
//   console.log("hello", personName, age);
// }
// helloWorld("world!.", 24);
// function addition(num1: number, num2: number): number {
//   return num1 + num2;
// }
// console.log(addition(12, 45));
function multiply(number1, number2) {
    if (number2 === void 0) { number2 = 41; }
    return number1 * number2;
}
multiply(50);
function subs(value1, value2) {
    return "Your result is ".concat(value1 - value2);
}
console.log(subs(41, 20));
