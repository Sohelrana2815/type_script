// type StudentInfo = {
//   firstName: string;
//   lastName: string;
//   id: number;
// };
function showPersonInfo(personObj) {
    var firstName = personObj.firstName, lastName = personObj.lastName, age = personObj.age;
    return "Full name: ".concat(firstName, " ").concat(lastName, " and his age is: ").concat(age);
}
var personInfo = {
    firstName: "Max",
    lastName: "Payne",
    age: 42,
};
var result = showPersonInfo(personInfo);
console.log(result);
