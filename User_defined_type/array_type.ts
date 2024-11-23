// User defined type: Array type

let userNames: string[];

userNames = ["john", "smith", "mosh", "mina"];
console.log(userNames[0]);

userNames.sort();

console.log(userNames);

// Result : [ 'john', 'mina', 'mosh', 'smith' ]

//  Array Multiple types

let multipleTypes: (string | number)[];

multipleTypes = [1, "name"];
