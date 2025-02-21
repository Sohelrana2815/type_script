// let age: number | string | boolean = 20;
// age = "20 years old";
// let ageArr: (string | number | boolean)[] = [23, 12, "42", "83", true];
// let ageArr2: (string | number)[] = ["hellow", 154546];
// let day: "Saturday" | "Sunday" | "Monday" = "Saturday";
// day = "Sunday";
// day = "Monday";
// day = "Saturday";
//------------ Type narrowing ---------
// function sayDetails(name: string, age: string | number): void {
//   let currentAge;
//   if (typeof age === "string") {
//   } else {
//   }
//   console.log(`Your name is: ${name}, your age is: ${currentAge}`);
// }
function sayDetails(name, age) {
    var currentAge;
    if (typeof age === "string") {
        currentAge = Number(age) - 2;
    }
    else {
        currentAge = age - 2;
    }
    console.log("Your name is ".concat(name, " and age is ").concat(currentAge));
}
sayDetails("Max", 38);
