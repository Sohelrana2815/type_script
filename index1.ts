// Challenge: finish the object type definition

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: {
    street: string;
    city: string;
    country: string;
  };
};

let person: Person = {
  name: "Sohel",
  age: 24,
  isStudent: true,
  address: {
    street: "123 street",
    city: "Dhaka",
    country: "Bangladesh", 
  },
};

let person2: Person = {
  name: "Rana",
  age: 24,
  isStudent: false,
  address: {
    street: "456 street",
    city: "Khulna",
    country: "Bangladesh",
  },
};
