// built_in data type: number,string,boolean, void, undefine, null
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = "Sohel";
lastName = " Rana";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("your id: ".concat(userId, ", username: ").concat(fullName, ", account activated: ").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLocaleLowerCase());
function display() {
    console.log("Hi i am display");
}
display();
