type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

let person1: Person = {
  name: "Moon",
  age: 24,
  isStudent: true,
};

let person2: Person = {
  name: "Samiul",
  age: 25,
  isStudent: false,
};

let people: Array<Person> = [person1, person2];
