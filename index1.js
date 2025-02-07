// Challenge: finish the object type definition
var person1 = {
    name: "Moon",
    age: 24,
    isStudent: true,
    address: {
        street: "Road 123",
        city: "Dhaka",
        country: "Bangladesh",
    },
};
var person2 = {
    name: "Joe",
    age: 50,
    isStudent: false,
};
function displayInfo(person) {
    var _a;
    console.log("".concat(person.name, " lives at ").concat((_a = person === null || person === void 0 ? void 0 : person.address) === null || _a === void 0 ? void 0 : _a.street));
}
displayInfo(person2);
