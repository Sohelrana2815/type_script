type People1 = {
  firstName: string;
  lastName: string;
  age: number;
};
interface People {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  fullName(): string;
}

interface Employee extends People {
  designation: string;
  yearOfExperience: number;
}
let sohel: Employee = {
  firstName: "Sohel",
  lastName: "Rana",
  age: 24,
  email: "sohelcocwer@gmail.com",
  fullName: function () {
    return `${this.firstName} ${this.lastName} age is: ${this.age} email: ${this.email} his designation is ${this.designation} and he has ${this.yearOfExperience}`;
  },
  designation: "Frontend Developer",
  yearOfExperience: 1.5,
};

console.log(sohel.fullName());
