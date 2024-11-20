// no.1 Basic Type Assignment
var username = "Sohel";
var age = 25;
var isActive = true;
// no.2 Function with type annotations
function sum(a, b) {
    return a + b;
}
var user = {
    name: "Sohel",
    age: 25,
    email: "sohel@example.com",
};
// console.log(user);
// no. 3
var numbers = [1, 2, 3, 4, 5, 6];
var userInfo = ["Sohel", 21, true];
var product1 = { name: "Laptop", price: 1000 };
var product2 = {
    name: "Phone",
    price: 700,
    description: "Latest model",
};
// console.log(product1, product2);
// 6. Union Types
// Write a function that accepts either a number or a string as an argument and logs it to the console.
function display(value) {
    // console.log(value);
}
display("Sohel");
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
function checkRole(role) {
    if (role === Role.Admin) {
        console.log("Welcome Admin!");
    }
    else if (role === Role.User) {
        console.log("Welcome User!");
    }
    else {
        console.log("Welcome Guest");
    }
}
