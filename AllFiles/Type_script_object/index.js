function personDetails(personObj) {
    var firstName = personObj.firstName, lastName = personObj.lastName, id = personObj.id, age = personObj.age;
    return "Person details: Person full name is ".concat(firstName, " ").concat(lastName, " he/she is ").concat(age, " years old. His/Her id is: ").concat(id);
}
var personInfo = {
    firstName: "Sam",
    lastName: "Online",
    id: 101,
    age: 28,
};
var result = personDetails(personInfo);
console.log(result);
