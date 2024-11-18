// let userName: string[];
// union type to use multiple types example: string | number | boolean
let userName: Array<string>;

userName = ["anis", "moon", "captain"];

console.log(userName[0]);

userName.sort();
console.log(userName);

let multipleTypes: (string | number)[];

multipleTypes = ["anis", 1, 2, 3, "moon"];
