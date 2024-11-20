// no.1 Basic Type Assignment

let username: string = "Sohel";
let age: number = 25;

let isActive: boolean = true;

// no.2 Function with type annotations

function sum(a: number, b: number): number {
  return a + b;
}

// console.log(sum(5, 3));

// 3. Object with Types

// let user: object;

// user = {
//   name: "Sohel",
//   age: 18,
//   email: "sohel@example.com",
// };

// console.log(user);

// alternative

interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Sohel",
  age: 25,
  email: "sohel@example.com",
};

// console.log(user);

// no. 3

let numbers: number[] = [1, 2, 3, 4, 5, 6];
let userInfo: [string, number, boolean] = ["Sohel", 21, true];

// console.log(numbers, userInfo);

// no.4

interface Product {
  name: string;
  price: number;
  description?: string; // optional property
}

const product1: Product = { name: "Laptop", price: 1000 };
const product2: Product = {
  name: "Phone",
  price: 700,
  description: "Latest model",
};

// console.log(product1, product2);

// 6. Union Types
// Write a function that accepts either a number or a string as an argument and logs it to the console.

function display(value: number | string): void {
  // console.log(value);
}

display("Sohel");

enum Role {
  Admin = "admin",
  User = "User",
  Guest = "Guest",
}

function checkRole(role: Role): void {
  if (role === Role.Admin) {
    console.log("Welcome Admin!");
  } else if (role === Role.User) {
    console.log("Welcome User!");
  } else {
    console.log("Welcome Guest");
  }
}
