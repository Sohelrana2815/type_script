var sohel = {
    firstName: "Sohel",
    lastName: "Rana",
    age: 24,
    email: "sohelcocwer@gmail.com",
    fullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " age is: ").concat(this.age, " email: ").concat(this.email, " his designation is ").concat(this.designation, " and he has ").concat(this.yearOfExperience);
    },
    designation: "bla bla",
    yearOfExperience: 2,
};
console.log(sohel.fullName());
