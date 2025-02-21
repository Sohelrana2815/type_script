type People1 = {
  firstName: string;
  lastName: string;
  age: number;
};

// no duplicate in type

// type People1 = {
//   id: string;
// };

interface People {
  firstName: string;
  lastName: string;
  age: number;
}

interface People {
  email: string;
  fullName(): string;
}

let info: People = {
  firstName: "Sohel",
  lastName: "Rana",
  age: 45,
  email: "sohelcocwer@gmail.com",
  fullName: function () {
    return `${this.firstName} ${this.lastName} `;
  },
};

console.log(info.fullName());
