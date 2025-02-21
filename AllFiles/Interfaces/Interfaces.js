var info = {
    firstName: "Sohel",
    lastName: "Rana",
    age: 45,
    email: "sohelcocwer@gmail.com",
    fullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " ");
    },
};
console.log(info.fullName());
