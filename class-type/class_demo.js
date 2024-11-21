var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ",age: ").concat(this.age));
    };
    return User;
}());
// class object
// user1 - name: sohel rana, age: 21
// user2 - name: moon, age: 21
var user1 = new User("Sohel Rana", 20);
user1.display();
var user2 = new User("SRM", 18);
user2.display();
