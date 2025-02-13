// type Address = {
//   street: string;
//   city: string;
//   country: string;
// };

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  // address?: Address;
};

let person1: Person = {
  name: "John",
  age: 45,
  isStudent: false,
  //   address: {
  //     street: "123 road",
  //     city: "Dhaka",
  //     country: "Bangladesh",
  //   },
};

let person2: Person = {
  name: "Sam",
  age: 36,
  isStudent: true,
  // address: {
  //   street: "123 road",
  //   city: "Dhaka",
  //   country: "Bangladesh",
  // },
};

// function displayInfo(person) {
//   console.log(`${person.name} lives at ${person.address?.street}`);
// }

// displayInfo(person1);

let people: Array<Person> = [person1, person2];
