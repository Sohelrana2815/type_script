// built-in type:
// 1.number
// 2.string,
// 3.boolean,
// 4.void,
// 5.null,
// 6.undefined

// Any is a super type

let userId: number;
let fullName: string;
let isProgrammer: boolean;

fullName = "john smith";
userId = 123;
isProgrammer = true;

console.log(
  `My name is ${fullName} i'm a ${isProgrammer} programmer and my id is: ${userId}`
);

// Result :  My name is john smith i'm a true programmer and my id is: 123

// void type

function display(): void {
  console.log("Void if function do not return anything");
}

display();

// Result : Void if function do not return anything
