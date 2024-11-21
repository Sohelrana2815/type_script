// built-in type: number, string, boolean, void, null, undefined etc

// Any is a super type

let userId: number;
let fullName: string;
let isProgrammer: boolean;

fullName = "Sohel Rana";
userId = 123;
isProgrammer = true;

console.log(
  `My name is ${fullName} i'm a ${isProgrammer} programmer and my id is: ${userId}`
);

// void type

function display(): void {
  console.log("Void if function do not return anything");
}

display();
