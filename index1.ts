// Challenge: finish the object type definition

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: Address;
};

let person1: Person = {
  name: "Moon",
  age: 24,
  isStudent: true,
  address: {
    street: "Road 123",
    city: "Dhaka",
    country: "Bangladesh",
  },
};

let person2: Person = {
  name: "Joe",
  age: 50,
  isStudent: false,
  address: {
    street: "Road 456",
    city: "Rajshahi",
    country: "Bangladesh",
  },
};
